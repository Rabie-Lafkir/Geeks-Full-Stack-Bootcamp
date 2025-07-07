import axios from 'axios';

export default async function fetchData(url='https://jsonplaceholder.typicode.com/todos/1'){
  try{
    const { data } = await axios.get(url);
    console.log('Fetched data:', data);
  }catch(e){
    console.error('Fetch error:', e.message);
  }
}
