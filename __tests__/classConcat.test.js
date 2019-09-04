import { classConcat } from '../src/classConcat';

describe('classConcat', () => {
  it('should return empty string if provided empty object', () => {
    expect(classConcat({})).toBe('');
  });

  it('should return empty string if provided empty array', () => {
    expect(classConcat([])).toBe('');
  });

  it('should return empty string if provided array of falsy values', () => {
    expect(classConcat(["", null, false, undefined, 0, NaN])).toBe('');
  });

  it('should return concatenated class names if provided array of class names', () => {
    expect(classConcat(["one", "two", false, "three"])).toBe('one two three ');
  });

  it('should return concatenated class names if provided array of class names', () => {
    expect(classConcat({
      one: true,
      two: true,
      three: false,
      four: true
    })).toBe('one two four ');
  });
});
