const fs = require('fs-extra');

console.log('→ Copying src files to build...');

try {
  // Copy all src files except excluded ones
  fs.copySync('src', 'build', {
    filter: (src) => {
      // Exclude these paths
      const exclude = [
        'src/bower_components',
        'src/includes/sass',
        'src/includes/css',  // We'll use compressed version
        'src/utils/log.txt'
      ];
      
      return !exclude.some(path => src.includes(path));
    }
  });
  
  console.log('✓ Files copied to build/');
} catch (err) {
  console.error('Error copying files:', err);
  process.exit(1);
}
