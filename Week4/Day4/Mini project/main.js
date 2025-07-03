const quotes = [
  {id:0,author:'Charles Lindbergh',quote:'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.',likes:0},
  {id:1,author:'Thomas Edison',quote:'Genius is one percent inspiration and ninety-nine percent perspiration.',likes:0},
  {id:2,author:'Oscar Wilde',quote:'Be yourself; everyone else is already taken.',likes:0},
  {id:3,author:'Marcus Aurelius',quote:'You have power over your mind – not outside events. Realize this, and you will find strength.',likes:0},
  {id:4,author:'Mae West',quote:'You only live once, but if you do it right, once is enough.',likes:0}
];

let lastId = null;

// DOM refs
const quoteTxt     = document.getElementById('quoteTxt');
const quoteAuthor  = document.getElementById('quoteAuthor');
const likesDiv     = document.getElementById('likes');
const card         = document.querySelector('.card');

// smooth-scroll helper
const scrollToCard = () => card.scrollIntoView({behavior:'smooth'});

function displayQuote(obj){
  quoteTxt.textContent    = obj.quote;
  quoteAuthor.textContent = obj.author;
  likesDiv.textContent    = `♥ ${obj.likes}`;
  lastId = obj.id;
}

// first quote
displayQuote(quotes[0]);

// Generate random
document.getElementById('generate').onclick = () => {
  let rand;
  do { rand = Math.floor(Math.random()*quotes.length); } while (rand === lastId);
  displayQuote(quotes[rand]);
};

// stats buttons
document.getElementById('charsWith').onclick    = () => alert(quoteTxt.textContent.length);
document.getElementById('charsWithout').onclick = () => alert(quoteTxt.textContent.replace(/\s/g,'').length);
document.getElementById('words').onclick        = () => alert(quoteTxt.textContent.trim().split(/\s+/).length);

// like
document.getElementById('likeBtn').onclick = () => {
  const q = quotes.find(q => q.id === lastId);
  if(q){ q.likes++; likesDiv.textContent = `♥ ${q.likes}`; }
};

// add quote form
document.getElementById('addForm').onsubmit = e => {
  e.preventDefault();
  const text   = document.getElementById('newQuote').value.trim();
  const author = document.getElementById('newAuthor').value.trim() || 'Anonymous';
  quotes.push({id:quotes.length,author,quote:text,likes:0});
  e.target.reset();
  alert('Quote added!');
};

// filter controls
let filtered = [], current = 0;
function showFilter(){
  if(!filtered.length){ alert('No quotes'); return; }
  displayQuote(filtered[current]);
  document.getElementById('filterCount').textContent = `${current+1}/${filtered.length}`;
  scrollToCard();
}

document.getElementById('filterBtn').onclick = () => {
  const name = document.getElementById('filterAuthor').value.trim().toLowerCase();
  filtered   = quotes.filter(q => q.author.toLowerCase().includes(name));
  current    = 0;
  showFilter();
};
document.getElementById('prevBtn').onclick = () => {
  if(filtered.length){
    current = (current - 1 + filtered.length) % filtered.length;
    showFilter();
  }
};
document.getElementById('nextBtn').onclick = () => {
  if(filtered.length){
    current = (current + 1) % filtered.length;
    showFilter();
  }
};
