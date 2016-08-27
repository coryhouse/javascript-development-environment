import {calculateSavings} from './utils/fuelSavingsCalculator';

const newMpg = getById('newmpg');
const tradeMpg = getById('tradempg');
const ppg = getById('ppg');
const milesDrivenPerMonth = getById('milesdrivenpermonth');
const resultTd = getById('result');

const settings = {
  newMpg: newMpg.value,
  tradeMpg: tradeMpg.value,
  ppg: ppg.value,
  milesDrivenPerMonth: milesDrivenPerMonth.value
};

newMpg.onkeyup = (e) => {
  settings.newMpg = e.srcElement.value;
  displayResults(settings);
};

tradeMpg.onkeyup = (e) => {
  settings.tradeMpg = e.srcElement.value;
  displayResults(settings);
};

ppg.onkeyup = (e) => {
  settings.ppg = e.srcElement.value;
  displayResults(settings);
};

milesDrivenPerMonth.onkeyup = (e) => {
  settings.milesDrivenPerMonth = e.srcElement.value;
  displayResults(settings);
};

function getById(id) {
  return global.document.getElementById(id);
}

function displayResults(settings) {
  let savingsOrLoss = calculateSavings(settings);
  if (savingsOrLoss) {
    resultTd.innerHTML = savingsOrLoss + ' per month';
  } else {
    resultTd.innerHTML = '';
  }
}
