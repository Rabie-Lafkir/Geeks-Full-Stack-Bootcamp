document.getElementById('userForm').addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = {
        name: formData.get('name'),
        lastname: formData.get('lastname')
      };
      document.getElementById('output').textContent = JSON.stringify(data);
      e.target.reset();
    });