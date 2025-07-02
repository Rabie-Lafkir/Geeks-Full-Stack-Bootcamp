(function(children, partner, location, job) {
  const p = document.createElement('p');
  p.textContent = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
  document.body.appendChild(p);
})(3, 'Alice', 'Paris', 'Web Developer');
