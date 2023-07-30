function showInUi_multi() {
  const multiplicationForm = document.getElementById('multiplicationForm');
  const multiplicationInput = document.getElementById('multiplicationInput');
  const multiplicationResult = document.getElementById('multiplicationResult');

  multiplicationForm.addEventListener('submit', e => {
    e.preventDefault();
    if (!multiplicationInput.value) {
      alert('Please enter number to generate Multiplication Table');
    } else {
      let num = Number(multiplicationInput.value);
      multiplicationResult.innerHTML = '';
      multiplicationResult.classList.remove('d-none');
      for (let i = 1; i <= 10; i++) {
        multiplicationResult.innerHTML += `<p> ${i} * ${num} = ${i * num} </p>`;
      }
    }

    filterForm.reset();
  });
}

showInUi_multi();
