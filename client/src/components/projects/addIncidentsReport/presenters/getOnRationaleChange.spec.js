import presenters from './presenters';

describe('presenters.getOnRationaleChange', () => {

  let eventWithEmptyValue
  let eventWithValidValue
  let currentViewModel

  beforeEach(() => {
    eventWithEmptyValue = {target: {value: '          '}};
    eventWithValidValue = {target: {value: ' Some issues '}};

    currentViewModel = {
      errors: {rationale: undefined},
      rationale: undefined
    };
  })

  it('Should set the new value', () => {
    const viewModel = presenters.getOnRationaleChange(eventWithValidValue, currentViewModel);
    const actual = viewModel.rationale;
   
    const expected = ' Some issues ';

    expect(actual).toEqual(expected);
  });

  it('Should clear error when valid', () => {
    const viewModel = presenters.getOnRationaleChange(eventWithValidValue, currentViewModel);
    const actual = viewModel.errors.rationale;
   
    const expected = undefined;

    expect(actual).toEqual(expected);
  });

  it('Should set error when trimmed value is empty', () => {
    const viewModel = presenters.getOnRationaleChange(eventWithEmptyValue, currentViewModel);
    const actual = viewModel.errors.rationale;
   
    const expected = 'Rationale is required';

    expect(actual).toEqual(expected);
  });
});