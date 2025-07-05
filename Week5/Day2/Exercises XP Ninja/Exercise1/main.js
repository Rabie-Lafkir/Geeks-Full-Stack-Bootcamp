const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form     = document.getElementById("gifForm");
const input    = document.getElementById("searchInput");
const grid     = document.getElementById("gifGrid");
const deleteBtn = document.getElementById("deleteBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  try {
    const url =
      `https://api.giphy.com/v1/gifs/search` +
      `?api_key=${API_KEY}&q=${encodeURIComponent(query)}` +
      `&limit=25&offset=0&rating=g&lang=en`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { data } = await res.json();

    grid.innerHTML = "";
    data.forEach(gif => {
      const src = gif.images?.downsized_medium?.url;
      if (!src) return;
      const card = document.createElement("div");
      card.className = "gif-card";
      card.innerHTML = `<img src="${src}" alt="${gif.title}" />`;
      grid.appendChild(card);
    });

    if (data.length === 0) alert("No GIFs found for that term 😥");
  } catch (err) {
    alert(`Error: ${err.message}`);
  }

  input.value = "";
});

deleteBtn.addEventListener("click", () => (grid.innerHTML = ""));
