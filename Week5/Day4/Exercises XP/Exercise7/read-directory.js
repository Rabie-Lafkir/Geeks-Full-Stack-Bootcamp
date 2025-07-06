const fs = require('fs').promises;

async function list() {
  const files = await fs.readdir('.');
  files.forEach(f => console.log(f));
}
list();
