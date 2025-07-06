const fs = require('fs').promises;

async function readFile(path) {
  try {
    return await fs.readFile(path, 'utf8');
  } catch (err) {
    console.error('Read error:', err.message);
  }
}

async function writeFile(path, content) {
  try {
    await fs.writeFile(path, content, 'utf8');
    console.log('Write successful');
  } catch (err) {
    console.error('Write error:', err.message);
  }
}

module.exports = { readFile, writeFile };
