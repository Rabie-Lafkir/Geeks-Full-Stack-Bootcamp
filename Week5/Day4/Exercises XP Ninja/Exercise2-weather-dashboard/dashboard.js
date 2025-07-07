import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import getWeather from './weather.js';

export default async function dashboard(){
  const rl = readline.createInterface({ input, output });
  const city = await rl.question('Enter a city: ');
  await getWeather(city);
  rl.close();
}
