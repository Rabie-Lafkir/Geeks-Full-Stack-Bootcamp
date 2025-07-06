const fs = require('fs').promises;

async function copy() {
  const data = await fs.readFile('source.txt', 'utf8');
  await fs.writeFile('destination.txt', data, 'utf8');
  console.log('File copied');
}
copy();
