// validate.js
function validateForm() {
  const id = document.getElementById('id').value.trim();
  const client = document.getElementById('client').value.trim();
  const destination = document.getElementById('destination').value.trim();

  const idRegex = /^\d+$/;
  const textRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  if (!idRegex.test(id)) {
    alert('El ID sólo debe contener números.');
    return false;
  }
  if (!textRegex.test(client)) {
    alert('El nombre del cliente sólo debe contener letras y espacios.');
    return false;
  }
  if (!textRegex.test(destination)) {
    alert('El destino sólo debe contener letras y espacios.');
    return false;
  }
  return true;
}

// (Opcional) prevenir escribir caracteres inválidos en tiempo real
document.addEventListener('DOMContentLoaded', () => {
  const idInput = document.getElementById('id');
  const clientInput = document.getElementById('client');
  const destinationInput = document.getElementById('destination');

  if (idInput) {
    idInput.addEventListener('input', () => {
      idInput.value = idInput.value.replace(/[^0-9]/g, '');
    });
  }
  if (clientInput) {
    clientInput.addEventListener('input', () => {
      clientInput.value = clientInput.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '');
    });
  }
  if (destinationInput) {
    destinationInput.addEventListener('input', () => {
      destinationInput.value = destinationInput.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '');
    });
  }
});
