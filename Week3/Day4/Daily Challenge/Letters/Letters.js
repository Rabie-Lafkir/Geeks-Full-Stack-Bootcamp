const inputField = document.getElementById('letterInput');

inputField.addEventListener('input', function () {
  this.value = this.value.replace(/[^a-zA-Z]/g, '');
});
