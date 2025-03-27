const fs = require('fs');
const path = require('path');

// Source directory (cryptocurrency-icons package)
const sourceDir = path.join(__dirname, '../node_modules/cryptocurrency-icons/svg/color');
// Destination directory (public folder)
const destDir = path.join(__dirname, '../public/crypto-icons');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy all SVG files and collect their names
const availableIcons = [];
fs.readdirSync(sourceDir).forEach(file => {
  if (file.endsWith('.svg')) {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);
    fs.copyFileSync(sourcePath, destPath);
    availableIcons.push(file.replace('.svg', ''));
  }
});

// Write the list of available icons to a JSON file
fs.writeFileSync(
  path.join(__dirname, '../src/utils/available-icons.json'),
  JSON.stringify(availableIcons, null, 2)
);

console.log('Crypto icons copied successfully!');
