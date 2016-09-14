import {calculateSavings} from './utils/fuelSavingsCalculator';
import {getCalculations} from './api/api';
import './index.css';

const getById = (id) => global.document.getElementById(id);

// Populate table of previous calculations via API call.
getCalculations().then(result => {
  let calculationsBody = "";

  result.forEach(calculation => {
    calculationsBody+= `<tr> 
      <td>${calculation.newMpg}</td>
      <td>${calculation.tradeMpg}</td>
      <td>${calculation.pricePerGallon}</td>
      <td>${calculation.milesDrivenPerMonth}</td>
      </tr>`
  });

  getById('calculations').innerHTML = calculationsBody;
});

const resultTd = getById('result');

const inputs = [
  getById('newMpg'),
  getById('tradeMpg'),
  getById('pricePerGallon'),
  getById('milesDrivenPerMonth')
];

inputs.map(input => {
  input.onkeyup = () => {
    var inputValues = {};
    inputs.forEach(input => inputValues[input.id] = parseFloat(input.value));
    displayResults(inputValues);
  }
});

function displayResults(inputValues) {
  const savingsOrLoss = calculateSavings(inputValues);
  resultTd.innerHTML = savingsOrLoss ? savingsOrLoss + ' per month' : '';
}
