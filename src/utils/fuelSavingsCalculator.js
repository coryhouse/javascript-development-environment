import mathHelper from './mathHelper';
import NumberFormatter from './numberFormatter';

function calculateMonthlyCost(milesDrivenPerMonth, ppg, mpg) {
  const gallonsUsedPerMonth = milesDrivenPerMonth / mpg;
  return gallonsUsedPerMonth * ppg;
}

export function calculateMilesDrivenPerMonth(milesDriven, milesDrivenTimeframe) {
  const monthsPerYear = 12;
  const weeksPerYear = 52;
  return (milesDriven * weeksPerYear) / monthsPerYear;
}

export function calculateSavingsPerMonth(settings) {
  if (!settings.milesDriven) {
    return 0;
  }

  const milesDrivenPerMonth = calculateMilesDrivenPerMonth(settings.milesDriven, settings.milesDrivenTimeframe);
  const tradeFuelCostPerMonth = calculateMonthlyCost(milesDrivenPerMonth, settings.ppg, settings.tradeMpg);
  const newFuelCostPerMonth = calculateMonthlyCost(milesDrivenPerMonth, settings.ppg, settings.newMpg);
  const savingsPerMonth = tradeFuelCostPerMonth - newFuelCostPerMonth;

  return mathHelper.roundNumber(savingsPerMonth, 2);
}

export function necessaryDataIsProvidedToCalculateSavings(settings) {
  return settings.newMpg > 0
    && settings.tradeMpg > 0
    && settings.ppg > 0
    && settings.milesDriven > 0;
}

export function calculateSavings(settings) {
  if (!necessaryDataIsProvidedToCalculateSavings(settings)) {
    return;
  }

  return calculateSavingsPerMonth(settings);
}
