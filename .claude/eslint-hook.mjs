#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';

// Try to get the filename from different sources
const filename = process.env.CLAUDE_FILENAME || process.argv[2];

if (!filename) {
  console.log('Note: Filename not provided to ESLint hook');
  // Run ESLint on all modified files instead
  try {
    console.log('Running ESLint on modified files...');
    // Get list of modified files from git
    const modifiedFiles = execSync('git diff --name-only --diff-filter=ACM', { encoding: 'utf-8' })
      .trim()
      .split('\n')
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.cjs', '.svelte'].includes(ext);
      });
    
    if (modifiedFiles.length > 0 && modifiedFiles[0] !== '') {
      console.log(`Found ${modifiedFiles.length} modified file(s) to lint`);
      for (const file of modifiedFiles) {
        try {
          console.log(`Linting ${file}...`);
          execSync(`eslint --fix "${file}"`, { 
            stdio: 'inherit',
            cwd: process.cwd()
          });
        } catch {
          console.error(`ESLint failed for ${file}`);
        }
      }
    }
  } catch {
    console.error('Could not get modified files from git');
  }
  process.exit(0);
}

// Get the file extension
const ext = path.extname(filename).toLowerCase();

// Check if this is a JavaScript/TypeScript/Svelte file
const jsExtensions = ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.cjs', '.svelte'];

if (jsExtensions.includes(ext)) {
  try {
    console.log(`Running ESLint on ${filename}...`);
    execSync(`eslint --fix "${filename}"`, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
  } catch {
    console.error(`ESLint failed for ${filename}`);
    // Don't exit with error to prevent blocking the edit
  }
}