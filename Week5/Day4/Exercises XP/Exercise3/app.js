const { readFile, writeFile } = require('./fileManager');

async function run() {
  const content = await readFile('Hello World.txt');
  console.log('Read:', content);
  await writeFile('Bye World.txt', 'Writing to the file');
}
run();
