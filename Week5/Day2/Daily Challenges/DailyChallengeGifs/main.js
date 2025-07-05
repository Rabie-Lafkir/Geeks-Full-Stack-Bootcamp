const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const form = document.getElementById("gifForm");
const input = document.getElementById("categoryInput");
const container = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

// Fetch & display one random GIF
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const tag = input.value.trim();
  if (!tag) return;

  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(
        tag
      )}&rating=g`
    );

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const { data } = await res.json();
    const url = data.images?.downsized_medium?.url;
    if (!url) throw new Error("No image found for that tag");

    addGifToDom(url);
    input.value = "";
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
});

// Delete all GIFs
deleteAllBtn.addEventListener("click", () => (container.innerHTML = ""));

// ---------- helpers ----------
function addGifToDom(src) {
  const card = document.createElement("div");
  card.className = "gif-card";

  const img = document.createElement("img");
  img.src = src;
  img.alt = "Random GIF";

  const delBtn = document.createElement("button");
  delBtn.textContent = "DELETE";
  delBtn.addEventListener("click", () => card.remove());

  card.append(img, delBtn);
  container.appendChild(card);
}
