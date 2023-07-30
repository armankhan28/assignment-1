function filterEvenNumbers() {
  const inputNumbers = document.getElementById('inputNumbers').value;
  const numbersArray = inputNumbers.split(',').map(num => parseInt(num.trim()));
  const evenNumbers = numbersArray.filter(num => num % 2 === 0);
  displayEvenNumbers(evenNumbers);
}

function displayEvenNumbers(evenNumbers) {
  const evenNumbersElement = document.getElementById('evenNumbers');
  if (evenNumbers.length > 0) {
    evenNumbersElement.textContent = evenNumbers.join(', ');
  } else {
    evenNumbersElement.textContent = 'No even numbers found.';
  }
}
