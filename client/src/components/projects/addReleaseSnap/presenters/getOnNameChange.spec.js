import presenters from './presenters';

describe('presenters.getOnNameChange', () => {

  let eventWithEmptyValue
  let eventWithValidValue
  let currentViewModel

  beforeEach(() => {
    eventWithEmptyValue = {target: {value: '          '}};
    eventWithValidValue = {target: {value: ' Version 1 '}};

    currentViewModel = {
      errors: {releaseName: undefined},
      releaseName: undefined
    };
  })

  it('Should set the new value', () => {
    const viewModel = presenters.getOnNameChange(eventWithValidValue, currentViewModel);
    const actual = viewModel.releaseName;
    const expected = ' Version 1 ';

    expect(actual).toEqual(expected);
  });

  it('Should clear error when valid', () => {
    const viewModel = presenters.getOnNameChange(eventWithValidValue, currentViewModel);
    const actual = viewModel.errors.releaseName;
    const expected = undefined;

    expect(actual).toEqual(expected);
  });

  it('Should set error when trimmed value is empty', () => {
    const viewModel = presenters.getOnNameChange(eventWithEmptyValue, currentViewModel);
    const actual = viewModel.errors.releaseName;
    const expected = 'Name is required';

    expect(actual).toEqual(expected);
  });
});