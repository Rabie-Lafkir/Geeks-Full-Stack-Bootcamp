const fs = require('fs').promises;
const path = require('path');

async function showFile() {
  const filePath = path.join(__dirname, 'files', 'file-data.txt');
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('File content:\n' + data);
  } catch (err) {
    console.error('Read error:', err.message);
  }
}

module.exports = showFile;
