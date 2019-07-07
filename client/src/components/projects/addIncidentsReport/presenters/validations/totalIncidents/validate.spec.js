import validations from './validations';

describe('Total incidents validations should validate', () => {
  it('Valid scenario', () => {
    let actual = validations.validate(8);
    let expected = undefined;

     expect(actual).toEqual(expected);
  });

  it('Total incidents are required', () => {
    let actual = validations.validate(undefined);
    let expected = 'Total incidents are required';

     expect(actual).toBe(expected);
  });

  it('Total incidents min is 1', () => {
    let actual = validations.validate(0);
    let expected = 'Total incidents min is 1';

     expect(actual).toEqual(expected);
  });

  it('Total incidents max is 100', () => {
    let actual = validations.validate(101);
    let expected = 'Total incidents max is 100';

     expect(actual).toEqual(expected);
  });
});