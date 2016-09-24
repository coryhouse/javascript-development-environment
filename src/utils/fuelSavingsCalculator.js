import numeral from 'numeral';

function calculateMonthlyCost(milesDrivenPerMonth, ppg, mpg) {
  const gallonsUsedPerMonth = milesDrivenPerMonth / mpg;
  return gallonsUsedPerMonth * ppg;
}

export function calculateSavingsPerMonth(settings) {
  const tradeFuelCostPerMonth = calculateMonthlyCost(settings.milesDrivenPerMonth, settings.pricePerGallon, settings.tradeMpg);
  const newFuelCostPerMonth = calculateMonthlyCost(settings.milesDrivenPerMonth, settings.pricePerGallon, settings.newMpg);
  const savingsPerMonth = tradeFuelCostPerMonth - newFuelCostPerMonth;
  return numeral(savingsPerMonth).format('$0.00');
}

export function necessaryDataIsProvidedToCalculateSavings(settings) {
  return settings.newMpg > 0
    && settings.tradeMpg > 0
    && settings.pricePerGallon > 0
    && settings.milesDrivenPerMonth > 0;
}

export function calculateSavings(settings) {
  if (!necessaryDataIsProvidedToCalculateSavings(settings)) {
    return;
  }
  return calculateSavingsPerMonth(settings);
}
