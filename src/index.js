import {calculateSavings} from './utils/fuelSavingsCalculator';

const newMpg = getById('newMpg');
const tradeMpg = getById('tradeMpg');
const ppg = getById('ppg');
const milesDrivenPerMonth = getById('milesDrivenPerMonth');
const resultTd = getById('result');

const inputValues = {
  newMpg: newMpg.value,
  tradeMpg: tradeMpg.value,
  ppg: ppg.value,
  milesDrivenPerMonth: milesDrivenPerMonth.value
};

const inputs = [
  newMpg,
  tradeMpg,
  ppg,
  milesDrivenPerMonth
];

inputs.map(input => {
  input.onkeyup = e => {
    inputValues[input.id] = e.srcElement.value;
    displayResults(inputValues);
  }
});

function getById(id) {
  return global.document.getElementById(id);
}

function displayResults(inputValues) {
  const savingsOrLoss = calculateSavings(inputValues);
  resultTd.innerHTML = savingsOrLoss ? savingsOrLoss + ' per month' : '';
}
