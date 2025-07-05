async function getDeathStar() {
  const url = 'https://www.swapi.tech/api/starships/9/';
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { result } = await res.json();
    console.log(result);
  } catch (err) {
    console.error('Fetch error:', err.message);
  }
}
getDeathStar();
