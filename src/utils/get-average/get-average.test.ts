import { getAverage } from './get-average';

describe('getAverage', () => {
  it('should return the average of three numbers', () => {
    const num1 = 1;
    const num2 = 2;
    const num3 = 3;

    const result = getAverage(num1, num2, num3);

    expect(result).toBe(2);
  });
});
