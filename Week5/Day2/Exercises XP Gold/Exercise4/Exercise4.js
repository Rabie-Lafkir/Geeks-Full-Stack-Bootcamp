// Async/await version that fetches three endpoints, using try/catch
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

async function fetchAll() {
  try {
    const responses = await Promise.all(urls.map(u => fetch(u)));
    // Check all statuses
    responses.forEach(r => {
      if (!r.ok) throw new Error(`Request failed: ${r.status} ${r.url}`);
    });
    // Parse JSON in parallel
    const [users, posts, albums] = await Promise.all(responses.map(r => r.json()));
    console.log("users:", users);
    console.log("posts:", posts);
    console.log("albums:", albums);
  } catch (err) {
    console.error("Caught in fetchAll:", err.message);
  }
}

// Run and also test error handling by intentionally bad URL
fetchAll();

async function testError() {
  const badUrls = [...urls];
  badUrls[1] = "https://jsonplaceholder.typicode.com/poosts"; // typo to trigger 404
  try {
    await Promise.all(badUrls.map(u => fetch(u)));
  } catch (err) {
    console.error("Expected error caught:", err.message);
  }
}
testError();
