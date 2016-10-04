import {calculateSavings} from './utils/fuelSavingsCalculator';
import {getCalculations, deleteCalculation} from './api/api';
import './index.css';

const getById = (id) => global.document.getElementById(id);

// Populate table of previous calculations via API call.
getCalculations().then(result => {
  let calculationsBody = "";

  result.forEach(calculation => {
    calculationsBody+= `<tr>
      <td><a href="#" data-id="${calculation.id}" class="deleteCalc">Delete</a></td>
      <td>${calculation.newMpg}</td>
      <td>${calculation.tradeMpg}</td>
      <td>${calculation.pricePerGallon}</td>
      <td>${calculation.milesDrivenPerMonth}</td>
      </tr>`
  });

  getById('calculations').innerHTML = calculationsBody;

  const deleteLinks = global.document.getElementsByClassName('deleteCalc');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteCalculation(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
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
