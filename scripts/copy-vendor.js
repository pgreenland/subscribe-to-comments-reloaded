const fs = require('fs-extra');
const path = require('path');

console.log('→ Copying vendor files from node_modules...');

const copies = [
  // DataTables
  {
    from: 'node_modules/datatables.net/js',
    to:   'src/vendor/datatables/media/js'
  },
  {
    from: 'node_modules/datatables.net-bs4/css',
    to:   'src/vendor/datatables.net-bs4/css'
  },
  {
    from: 'node_modules/datatables.net-bs4/js',
    to:   'src/vendor/datatables.net-bs4/js'
  },
  {
    from: 'node_modules/datatables.net-responsive/js',
    to:   'src/vendor/datatables.net-responsive/js'
  },
  {
    from: 'node_modules/datatables.net-responsive-bs4/css',
    to:   'src/vendor/datatables.net-responsive-bs4/css'
  },
  {
    from: 'node_modules/datatables.net-responsive-bs4/js',
    to:   'src/vendor/datatables.net-responsive-bs4/js'
  },
  // Bootstrap
  {
    from: 'node_modules/bootstrap/dist',
    to:   'src/vendor/bootstrap/dist'
  },
  // Font Awesome
  {
    from: 'node_modules/font-awesome',
    to:   'src/vendor/Font-Awesome/web-fonts-with-css'
  },
  // WebUI Popover
  {
    from: 'node_modules/webui-popover/dist',
    to:   'src/vendor/webui-popover/dist'
  }
];

try {
  copies.forEach(({ from, to }) => {
    if (fs.existsSync(from)) {
      fs.copySync(from, to);
      console.log(`  ✓ Copied ${path.basename(from)} → ${to}`);
    } else {
      console.warn(`  ⚠ Source not found: ${from}`);
    }
  });
  console.log('✓ Vendor files copied');
} catch (err) {
  console.error('Error copying vendor files:', err);
  process.exit(1);
}
