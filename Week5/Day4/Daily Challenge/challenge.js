const chalk = require('chalk');
const greet = require('./task1/greeting');
const colorfulMessage = require('./task2/colorful-message');
const showFile = require('./task3/read-file');

console.log(chalk.yellowBright(greet('Developer')));
colorfulMessage();
showFile();
