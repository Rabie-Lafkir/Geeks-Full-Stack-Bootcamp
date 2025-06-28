function myMove() {
  const elem = document.getElementById("animate");
  let pos = 0;
  const id = setInterval(frame, 1);

  function frame() {
    if (pos >= 350) {  // container 400px minus 50px box
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + "px";
    }
  }
}

const button = document.getElementById("moveBtn");
button.addEventListener("click", myMove);
