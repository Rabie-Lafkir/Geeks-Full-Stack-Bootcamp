const chalk = require('chalk');

function colorfulMessage() {
  console.log(
    chalk.blue('Welcome') +
    ' to the ' +
    chalk.bold.magenta('Colorful') +
    ' Node.js ' +
    chalk.green('World! 🌈')
  );
}

module.exports = colorfulMessage;
