import fs from 'fs/promises';

export default async function readFile(path){
  try{
    const data = await fs.readFile(path,'utf8');
    console.log(data);
  }catch(e){
    console.error('Read error:', e.message);
  }
}
