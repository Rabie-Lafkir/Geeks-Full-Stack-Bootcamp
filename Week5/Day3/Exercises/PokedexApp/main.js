// ---------- DOM refs ----------
const spriteImg = document.getElementById('sprite');
const nameEl    = document.getElementById('poke-name');
const idEl      = document.getElementById('poke-id');
const typeEl    = document.getElementById('type');
const heightEl  = document.getElementById('height');
const weightEl  = document.getElementById('weight');
const loader    = document.getElementById('loader');
const errorBox  = document.getElementById('error');
const statsBox  = document.getElementById('stats');

const prevBtn   = document.getElementById('prevBtn');
const nextBtn   = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');

// ---------- globals ----------
let currentId = 1;
const MAX_ID  = 1010; // Gen 9 upper bound

// ---------- helpers ----------
const API = 'https://pokeapi.co/api/v2/pokemon/';

const show  = el => el.classList.remove('hidden');
const hide  = el => el.classList.add('hidden');

async function fetchPokemon(id) {
  // wrap-around logic
  if (id < 1)     id = MAX_ID;
  if (id > MAX_ID) id = 1;
  currentId = id;

  // reset UI
  hide(errorBox);
  hide(spriteImg); hide(nameEl); hide(idEl); hide(statsBox);
  show(loader);

  try {
    const res = await fetch(API + id);
    if (!res.ok) throw new Error('Pokémon not found');

    const data = await res.json();

    const img =
      data.sprites.other['official-artwork'].front_default ||
      data.sprites.front_default;

    // populate UI
    spriteImg.src = img;
    spriteImg.alt = data.name;
    nameEl.textContent  = data.name.toUpperCase();
    idEl.textContent    = '#' + data.id.toString().padStart(4, '0');
    typeEl.textContent  = data.types.map(t => t.type.name).join(', ');
    heightEl.textContent= (data.height / 10) + ' m';
    weightEl.textContent= (data.weight / 10) + ' kg';

    // reveal card
    hide(loader);
    [spriteImg, nameEl, idEl, statsBox].forEach(show);

  } catch (err) {
    hide(loader);
    errorBox.textContent = 'Oh no! That Pokémon isn’t available…';
    show(errorBox);
  }
}

// ---------- event wiring ----------
prevBtn.addEventListener('click', () => fetchPokemon(currentId - 1));
nextBtn.addEventListener('click', () => fetchPokemon(currentId + 1));
randomBtn.addEventListener('click', () =>
  fetchPokemon(Math.floor(Math.random() * MAX_ID) + 1)
);

// ---------- first load ----------
fetchPokemon(currentId);
