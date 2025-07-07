const axios = require('axios');

async function fetchPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { data } = await axios.get(url);
  return data;
}

module.exports = { fetchPosts };
