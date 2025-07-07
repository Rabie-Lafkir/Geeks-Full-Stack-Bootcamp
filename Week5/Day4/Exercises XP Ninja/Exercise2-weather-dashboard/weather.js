import axios from 'axios';
import chalk from 'chalk';

const API_KEY = 'YOUR_OPENWEATHERMAP_KEY';

export default async function getWeather(city){
  try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    const { data } = await axios.get(url);
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    console.log(chalk.cyan(`${city}: ${temp}°C, ${desc}`));
  }catch(e){
    console.error(chalk.red('Weather error:'), e.response?.data?.message || e.message);
  }
}
