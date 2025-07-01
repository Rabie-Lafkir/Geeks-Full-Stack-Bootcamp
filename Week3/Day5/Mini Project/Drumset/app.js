function triggerPad(keyCode){
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const pad   = document.querySelector(`.pad[data-key="${keyCode}"]`);
  if(!audio || !pad) return;

  audio.currentTime = 0;
  audio.play();

  pad.classList.add('active');
  setTimeout(()=>pad.classList.remove('active'), 120);
}

window.addEventListener('keydown', (e)=>{
  triggerPad(e.code);
});

document.getElementById('padGrid').addEventListener('click', (e)=>{
  const key = e.target.closest('.pad')?.dataset.key;
  if(key) triggerPad(key);
});
