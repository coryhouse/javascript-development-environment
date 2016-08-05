import {calculateSavings} from './utils/fuelSavingsCalculator';

function getById(id) {
  return global.document.getElementById(id);
}

const newMpg = getById('new-mpg');
const tradeMpg = getById('trade-mpg');
const ppg = getById('ppg');
const milesDriven = getById('miles-driven');

const settings = {
  newMpg: newMpg.value,
  tradeMpg: tradeMpg.value,
  ppg: ppg.value,
  milesDriven: milesDriven.value
};

newMpg.onchange = (e) => {
  settings.newMpg = e.srcElement.value;
  calculateSavings(settings);
};

tradeMpg.onchange = (e) => {
  settings.tradeMpg = e.srcElement.value;
  calculateSavings(settings);
};

ppg.onchange = (e) => {
  settings.ppg = e.srcElement.value;
  calculateSavings(settings);
};

milesDriven.onchange = (e) => {
  settings.milesDriven = e.srcElement.value;
  calculateSavings(settings);
};

// let inputs = document.getElementsByTagName('input');
// inputs.map(function(input) {
//   input.addEventListener("change", function() {
//     alert('hi');
//   });
// });

