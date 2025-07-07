import chalk from 'chalk';
export default function greet(name='Ninja'){
  console.log(chalk.greenBright(`Hello, ${name}! Welcome to Ninja Utility.`));
}
