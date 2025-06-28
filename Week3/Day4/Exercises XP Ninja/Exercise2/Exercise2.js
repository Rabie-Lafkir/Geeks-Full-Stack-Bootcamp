document.getElementById("emailForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const result = document.getElementById("result");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;

  if (pattern.test(email)) {
    result.textContent = "Valid email.";
  } else {
    result.textContent = "Invalid email.";
  }
});

