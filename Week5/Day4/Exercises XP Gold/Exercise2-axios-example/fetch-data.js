const axios=require('axios');
async function fetchPosts(){
 try{const {data}=await axios.get('https://jsonplaceholder.typicode.com/posts');
  data.forEach(p=>console.log('-',p.title));
 }catch(e){console.error(e.message);}
}
module.exports=fetchPosts;
