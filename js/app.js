// Potential todos:
//  - Check if input is a valid number, else display an error message
//  - Setup testing
//  - Better styling - flexbox?
//  - Responisive design


const form = document.querySelector('form');
const input = form.querySelector('input');
const button = form.querySelector('button');
const select = form.querySelector('select');

const result = document.querySelector('#result');
let conversionResult;


const FtoC = fahrenheit => {
  return ((fahrenheit - 32) * (5 / 9));
};

const CtoF = celcius => {
  return (celcius * (9 / 5)) + 32;
};


button.addEventListener('click', event => {
  event.preventDefault();

  const value = parseInt(input.value);

  if (select.value === 'Fahrenheit') {
    conversionResult = `${FtoC(value).toFixed(1)} C`;
  }
  if (select.value === 'Celcius') {
    conversionResult = `${CtoF(value).toFixed(1)} F`;
  }

  result.innerText = conversionResult;
});