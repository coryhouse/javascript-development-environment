import {expect} from 'chai';
import {necessaryDataIsProvidedToCalculateSavings, calculateSavingsPerMonth} from './fuelSavingsCalculator';

describe('Fuel Savings Calculator', () => {
  describe('necessaryDataIsProvidedToCalculateSavings', () => {
    it('returns false when necessary data isn\'t provided', () => {
      // arrange
      const settings = {
        newMpg: 20
      };

      // assert
      expect(necessaryDataIsProvidedToCalculateSavings(settings)).to.equal(false);
    });

    it('returns true when necessary data is provided', () => {
      // arrange
      const settings = {
        newMpg: 20,
        tradeMpg: 10,
        ppg: 1.50,
        milesDrivenPerMonth: 100
      };

      // assert
      expect(necessaryDataIsProvidedToCalculateSavings(settings)).to.equal(true);
    });
  });

  describe('calculateSavingsPerMonth', () => {
    it('returns $27.63 in savings with these settings', () => {
      // arrange
      const settings = {
        newMpg: 38,
        tradeMpg: 24,
        ppg: 3.75,
        milesDrivenPerMonth: 480,
      };

      // act
      const savingsPerMonth = calculateSavingsPerMonth(settings);

      // assert
      expect(savingsPerMonth).to.equal('$27.63');
    });

    it('returns $31.66 in savings with these settings', () => {
      // arrange
      const settings = {
        tradeMpg: 24,
        ppg: 3.75,
        newMpg: 38,
        milesDrivenPerMonth: 550,
      };

      // act
      const savingsPerMonth = calculateSavingsPerMonth(settings);

      // assert
      expect(savingsPerMonth).to.equal('$31.66');
    });

    it('returns -$138.93 in loss with these settings', () => {
      // arrange
      const settings = {
        tradeMpg: 40,
        ppg: 3.75,
        newMpg: 18,
        milesDrivenPerMonth: 1212.5,
      };

      // act
      const savingsPerMonth = calculateSavingsPerMonth(settings);

      // assert
      expect(savingsPerMonth).to.equal('-$138.93');
    });
  });
});
