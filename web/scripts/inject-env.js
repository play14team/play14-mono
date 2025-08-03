#!/usr/bin/env node

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const envPath = join(rootDir, '.env.local');

if (!existsSync(envPath)) {
	console.error('❌ .env.local file not found');
	process.exit(1);
}

console.log('📄 Reading .env.local...');
const envContent = readFileSync(envPath, 'utf-8');

const envVars = {};
envContent.split('\n').forEach((line) => {
	line = line.trim();

	// Skip empty lines and comments
	if (!line || line.startsWith('#')) return;

	const [key, ...valueParts] = line.split('=');
	if (key && valueParts.length > 0) {
		const value = valueParts.join('=').replace(/^["']|["']$/g, '');

		// Skip Convex-specific vars that are managed by Convex itself
		if (key === 'CONVEX_DEPLOYMENT' || key === 'PUBLIC_CONVEX_URL') {
			console.log(`⏭️  Skipping ${key} (managed by Convex)`);
			return;
		}

		envVars[key] = value;
	}
});

const envVarCount = Object.keys(envVars).length;
if (envVarCount === 0) {
	console.log('✅ No environment variables to inject');
	process.exit(0);
}

console.log(`\n🔐 Found ${envVarCount} environment variable(s) to inject:`);
Object.keys(envVars).forEach((key) => {
	console.log(`   - ${key}`);
});

console.log('\n🚀 Injecting environment variables into Convex...');

// Function to run convex env set command
const setEnvVar = (key, value) => {
	return new Promise((resolve, reject) => {
		const maskedValue = value.substring(0, 10) + '...';
		console.log(`   Setting ${key} = ${maskedValue}`);

		const child = spawn('npx', ['convex', 'env', 'set', key, value], {
			cwd: rootDir,
			stdio: ['inherit', 'pipe', 'pipe'],
			shell: true
		});

		let output = '';
		let error = '';

		child.stdout.on('data', (data) => {
			output += data.toString();
		});

		child.stderr.on('data', (data) => {
			error += data.toString();
		});

		child.on('close', (code) => {
			if (code !== 0) {
				console.error(`   ❌ Failed to set ${key}: ${error || output}`);
				reject(new Error(`Failed to set ${key}`));
			} else {
				console.log(`   ✅ ${key} set successfully`);
				resolve();
			}
		});
	});
};

// Set all environment variables
(async () => {
	try {
		for (const [key, value] of Object.entries(envVars)) {
			await setEnvVar(key, value);
		}
		console.log('\n✅ All environment variables injected successfully!');
	} catch (error) {
		console.error('\n❌ Failed to inject environment variables:', error.message);
		process.exit(1);
	}
})();
