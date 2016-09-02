import {calculateSavings} from './utils/fuelSavingsCalculator';

const getById = (id) => global.document.getElementById(id);
const resultTd = getById('result');

const inputs = [
  getById('newMpg'),
  getById('tradeMpg'),
  getById('ppg'),
  getById('milesDrivenPerMonth')
];

inputs.map(input => {
  input.onkeyup = () => {
    displayResults(inputs);
  }
});

function displayResults(inputs) {
  var inputValues = {};
  inputs.forEach(input => inputValues[input.id] = parseFloat(input.value));
  const savingsOrLoss = calculateSavings(inputValues);
  resultTd.innerHTML = savingsOrLoss ? savingsOrLoss + ' per month' : '';
}
