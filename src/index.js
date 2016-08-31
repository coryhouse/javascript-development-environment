import {calculateSavings} from './utils/fuelSavingsCalculator';

const newMpg = getById('newMpg');
const tradeMpg = getById('tradeMpg');
const ppg = getById('ppg');
const milesDrivenPerMonth = getById('milesDrivenPerMonth');
const resultTd = getById('result');

const settings = {
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
    settings[input.id] = e.srcElement.value;
    displayResults(settings);
  }
});

function getById(id) {
  return global.document.getElementById(id);
}

function displayResults(settings) {
  const savingsOrLoss = calculateSavings(settings);
  resultTd.innerHTML = savingsOrLoss ? savingsOrLoss + ' per month' : '';
}
