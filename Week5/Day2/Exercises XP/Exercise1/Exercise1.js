async function getHilariousGifs() {
  const url = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Fetch error:', err.message);
  }
}
getHilariousGifs();
