const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = document.querySelector('#height').value;

  const weight = document.querySelector('#weight').value;

  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please give a valid height';
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please give a valid weight';
  }
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  result.innerHTML = `<span>${bmi}</span>`;
});
