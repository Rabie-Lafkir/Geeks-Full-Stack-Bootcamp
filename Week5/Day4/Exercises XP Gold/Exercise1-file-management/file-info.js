const fs = require('fs');
const path = require('path');
function showFileInfo() {
  const filePath = path.join(__dirname, 'data', 'example.txt');
  if (!fs.existsSync(filePath)) return console.log('File not found');
  const stats = fs.statSync(filePath);
  console.log('Exists: true');
  console.log('Size:', stats.size,'bytes');
  console.log('Created:', stats.birthtime);
}
module.exports = showFileInfo;
