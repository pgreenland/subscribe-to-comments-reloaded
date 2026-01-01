const fs = require('fs-extra');

console.log('→ Cleaning build directories...');

try {
  fs.removeSync('dist/');
  fs.removeSync('src/vendor/');
  fs.removeSync('build/');
  console.log('✓ Clean complete');
} catch (err) {
  console.error('Error cleaning:', err);
  process.exit(1);
}
