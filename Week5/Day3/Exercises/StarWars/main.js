// ---- DOM refs -------------------------------------------------
const btn     = document.getElementById('btn');
const loader  = document.getElementById('loader');
const card    = document.getElementById('card');
const errBox  = document.getElementById('error');

const nameEl   = document.getElementById('name');
const heightEl = document.getElementById('height');
const genderEl = document.getElementById('gender');
const birthEl  = document.getElementById('birth');
const homeEl   = document.getElementById('home');

// ---- Helpers --------------------------------------------------
const SWAPI = 'https://www.swapi.tech/api/people/';
const MAX   = 83; // total characters in swapi.tech  :contentReference[oaicite:0]{index=0}

function getRandomId(){
  return Math.floor(Math.random() * MAX) + 1;
}

function show(el){ el.classList.remove('hidden'); }
function hide(el){ el.classList.add('hidden'); }

async function fetchJson(url){
  const res = await fetch(url);
  if(!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// ---- Main handler ---------------------------------------------
async function getCharacter(){
  const id = getRandomId();
  hide(errBox);
  hide(card);
  show(loader);

  try{
    // 1. fetch character
    const { result } = await fetchJson(SWAPI + id);          // docs mention /people/:id  :contentReference[oaicite:1]{index=1}
    const data = result.properties;

    // 2. fetch homeworld (second request)
    const homeworld = await fetchJson(data.homeworld);

    // 3. render
    nameEl.textContent   = data.name;
    heightEl.textContent = data.height;
    genderEl.textContent = data.gender;
    birthEl.textContent  = data.birth_year;
    homeEl.textContent   = homeworld.result.properties.name;

    hide(loader);
    show(card);
  }catch(err){
    hide(loader);
    errBox.textContent = '⚠️  '+err.message;
    show(errBox);
  }
}

btn.addEventListener('click', getCharacter);
