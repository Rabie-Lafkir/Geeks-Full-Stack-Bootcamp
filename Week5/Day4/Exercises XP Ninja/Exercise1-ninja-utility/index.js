#!/usr/bin/env node
import { Command } from 'commander';
import greet from './commands/greet.js';
import fetchData from './commands/fetch.js';
import readFile from './commands/read.js';

const program = new Command();

program
  .command('greet [name]')
  .description('Display a greeting')
  .action(name=>greet(name));

program
  .command('fetch [url]')
  .description('Fetch JSON from URL')
  .action(url=>fetchData(url));

program
  .command('read <file>')
  .description('Read and display file contents')
  .action(file=>readFile(file));

program.parse(process.argv);
