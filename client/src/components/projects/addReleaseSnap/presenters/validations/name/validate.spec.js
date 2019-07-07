import validations from './validations';

describe('Name validations should validate', () => {

  it('Name is required when empty', () => {
    let actual = validations.validate('');
    let expected = 'Name is required';

    expect(actual).toEqual(expected);
  });

  it('Name is required when has only white spaces', () => {
    let actual = validations.validate('    ');
    let expected = 'Name is required';

    expect(actual).toEqual(expected);
  });

  it('Name with 200 characters is valid', () => {
    let actual = validations.validate('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890');
    let expected = undefined;

    expect(actual).toEqual(expected);
  });

  it('Name has a max of 200 characters', () => {
    let actual = validations.validate('123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901');
    let expected = 'Name has a max of 200 characters';

    expect(actual).toEqual(expected);
  });
});