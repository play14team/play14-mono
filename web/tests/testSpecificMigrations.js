// TEST SPECIFIC MIGRATIONS - TEST FIXES
// Run these commands in the Convex dashboard functions tab to test the fixes

console.log('🧪 TESTING FIXED MIGRATIONS');
console.log('============================');

console.log('\n🏢 STEP 1: Test venues migration (65 failed previously)');
console.log('Run this command:');
console.log('runCompleteMigration({ contentTypes: ["venues"] })');
console.log('');
console.log(
  'Expected result: Most/all venues should succeed (no more addressDetails/website null errors)'
);

console.log('\n🏆 STEP 2: Test sponsors migration (8 failed previously)');
console.log('Run this command:');
console.log('runCompleteMigration({ contentTypes: ["sponsors"] })');
console.log('');
console.log('Expected result: All sponsors should succeed (no more url null errors)');

console.log('\n📜 STEP 3: Test history migration (1 failed previously)');
console.log('Run this command:');
console.log('runCompleteMigration({ contentTypes: ["history"] })');
console.log('');
console.log('Expected result: History should succeed (no more additionalText null error)');

console.log('\n🎮 STEP 4: Test games migration (66 failed previously)');
console.log('Run this command:');
console.log('runCompleteMigration({ contentTypes: ["games"] })');
console.log('');
console.log(
  'Expected result: All games should succeed (no more credits null or materials/tags id errors)'
);

console.log('\n📍 STEP 5: Test eventLocations migration (44 failed previously)');
console.log('Run this command:');
console.log('runCompleteMigration({ contentTypes: ["eventLocations"] })');
console.log('');
console.log(
  'Expected result: All eventLocations should succeed (no more locationOriginal object errors)'
);

console.log('\n✅ SUCCESS INDICATORS:');
console.log('- failed: 0 for each content type');
console.log('- successful: matches totalProcessed');
console.log('- No validation errors in console');

console.log('\n🚀 AFTER ALL FIXES WORK:');
console.log('Run the complete migration:');
console.log('runCompleteMigration()');
console.log('');
console.log('Expected: All content types succeed except possibly events (524 error)');
