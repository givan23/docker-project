// getAverage.smoke.test.ts
import { getAverage } from './get-average';

describe('Smoke Test for getAverage', () => {
  test('should return the average of three numbers', () => {
    const result = getAverage(1, 2, 3);
    expect(result).toBe(2);
  });
});
