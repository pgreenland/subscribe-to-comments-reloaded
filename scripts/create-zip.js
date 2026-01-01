const archiver = require('archiver');
const fs = require('fs-extra');
const path = require('path');

console.log('→ Creating distribution zip...');

// Ensure dist directory exists
fs.ensureDirSync('dist');

const output = fs.createWriteStream('dist/subscribe-to-comments-reloaded.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression
});

output.on('close', () => {
  const sizeMB = (archive.pointer() / 1024 / 1024).toFixed(2);
  console.log(`✓ Created dist/subscribe-to-comments-reloaded.zip (${sizeMB} MB)`);
});

archive.on('warning', (err) => {
  if (err.code === 'ENOENT') {
    console.warn('Warning:', err);
  } else {
    throw err;
  }
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add all files from build directory
archive.glob('**/*', {
  cwd: 'build',
  dot: false
});

archive.finalize();
