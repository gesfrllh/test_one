import { sortDescending, maxSubarraySum, sumEvenNumbers } from '../src/index';

describe('sortDescending', () => {
  it('should sort array from largest to smallest', () => {
    const input = [1, 2, 4, 3, 5, 3, 2, 1];
    const expected = [5, 4, 3, 3, 2, 2, 1, 1];
    expect(sortDescending([...input])).toEqual(expected);
  });

  it('should return empty array if input is empty', () => {
    expect(sortDescending([])).toEqual([]);
  });

  it('should handle array with single element', () => {
    expect(sortDescending([10])).toEqual([10]);
  });
});

describe('maxSubarraySum', () => {
  it('should return max sum of subarray with given length', () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });

  it('should return 0 if subLen is larger than array length', () => {
    expect(maxSubarraySum([1, 2, 3], 5)).toBe(0);
  });

  it('should handle subLen equals array length', () => {
    expect(maxSubarraySum([1, 2, 3], 3)).toBe(6);
  });

  it('should handle array with negative numbers', () => {
    expect(maxSubarraySum([-2, -1, -3], 2)).toBe(-3);
  });
});

describe('sumEvenNumbers', () => {
  it('should sum all even numbers in nested object (example 1)', () => {
    const input = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup"
        }
      }
    };
    expect(sumEvenNumbers(input)).toBe(6);
  });

  it('should sum all even numbers in nested object (example 2)', () => {
    const input = {
      a: 2,
      b: {b: 2, bb: {b: 3, bb: {b: 2}}},
      c: {c: {c: 2}, cc: 'ball', ccc: 5},
      d: 1,
      e: {e: {e: 4}, ee: 'car'}
    };
    expect(sumEvenNumbers(input)).toBe(12);
  });

  it('should return 0 if no even numbers found', () => {
    const input = {
      a: 1,
      b: {c: 3, d: {e: 5}},
      f: 'string',
      g: null
    };
    expect(sumEvenNumbers(input)).toBe(0);
  });

  it('should handle empty object', () => {
    expect(sumEvenNumbers({})).toBe(0);
  });

  it('should handle null or undefined input gracefully', () => {
    expect(sumEvenNumbers(null)).toBe(0);
    expect(sumEvenNumbers(undefined)).toBe(0);
  });
});
