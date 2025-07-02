(function(userName) {
  const nav = document.getElementById('navbar');
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.gap = '0.5rem';

  const img = document.createElement('img');
  img.src = 'https://i.pravatar.cc/40';
  img.alt = `${userName} profile`;
  img.width = 40;
  img.height = 40;
  img.style.borderRadius = '50%';

  const span = document.createElement('span');
  span.textContent = userName;

  container.appendChild(img);
  container.appendChild(span);
  nav.appendChild(container);
})('John');
