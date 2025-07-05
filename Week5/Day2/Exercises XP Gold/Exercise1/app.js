const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gifForm");
const queryInput = document.getElementById("query");
const grid = document.getElementById("grid");
const clearBtn = document.getElementById("clearBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const q = queryInput.value.trim();
  if (!q) return;
  try {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(q)}&limit=25&offset=0&rating=g&lang=en`);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const { data } = await resp.json();
    grid.innerHTML = "";
    data.forEach(g => {
      const src = g.images?.downsized_medium?.url;
      if (!src) return;
      const card = document.createElement("div");
      card.className = "gif-card";
      card.innerHTML = `<img src="${src}" alt="${g.title}">`;
      grid.append(card);
    });
    if (!data.length) alert("No GIFs found.");
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
  queryInput.value = "";
});

clearBtn.addEventListener("click", () => grid.innerHTML = "");
