// 1. Retrieve the h1 and log it
const h1 = document.querySelector("h1");
console.log(h1);

// 2. Remove last paragraph
const article = document.querySelector("article");
article.lastElementChild.remove();

// 3. On h2 click, change background to red
const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

// 4. On h3 click, hide it
const h3 = document.querySelector("h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

// 5. Add button to bold paragraphs
const boldBtn = document.getElementById("boldBtn");
boldBtn.addEventListener("click", () => {
  const paragraphs = article.querySelectorAll("p");
  paragraphs.forEach(p => p.style.fontWeight = "bold");
});

// hover on h1 random font size
h1.addEventListener("mouseover", () => {
  const randomSize = Math.floor(Math.random() * 100) + "px";
  h1.style.fontSize = randomSize;
});

// hover on 2nd paragraph to fade
const secondP = article.querySelectorAll("p")[1];
secondP.addEventListener("mouseover", () => {
  secondP.classList.add("fade-out");
});
