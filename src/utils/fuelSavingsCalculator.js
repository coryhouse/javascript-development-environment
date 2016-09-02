import numeral from 'numeral';

function calculateMonthlyCost(milesDrivenPerMonth, ppg, mpg) {
  const gallonsUsedPerMonth = milesDrivenPerMonth / mpg;
  return gallonsUsedPerMonth * ppg;
}

export function calculateSavingsPerMonth(settings) {
  if (!settings.milesDrivenPerMonth) {
    return 0;
  }

  const tradeFuelCostPerMonth = calculateMonthlyCost(settings.milesDrivenPerMonth, settings.ppg, settings.tradeMpg);
  const newFuelCostPerMonth = calculateMonthlyCost(settings.milesDrivenPerMonth, settings.ppg, settings.newMpg);
  const savingsPerMonth = tradeFuelCostPerMonth - newFuelCostPerMonth;
  return numeral(savingsPerMonth).format('$0.00');
}

export function necessaryDataIsProvidedToCalculateSavings(settings) {
  return settings.newMpg > 0
    && settings.tradeMpg > 0
    && settings.ppg > 0
    && settings.milesDrivenPerMonth > 0;
}

export function calculateSavings(settings) {
  if (!necessaryDataIsProvidedToCalculateSavings(settings)) {
    return;
  }
  return calculateSavingsPerMonth(settings);
}
