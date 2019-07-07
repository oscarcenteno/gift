import presenters from './presenters';

describe('presenters.getOnDateChange', () => {

  let viewModel
  beforeEach(() => {
    const currentViewModel = {
      errors: { releaseDate: undefined },
      endDate: undefined
    };
    viewModel = presenters.getOnDateChange(' ', currentViewModel);

  })

  it('Should set the new value', () => {
    const actual = viewModel.releaseDate;
    const expected = ' ';

    expect(actual).toEqual(expected);
  });

  it('Should set error when new value is invalid', () => {
    const actual = viewModel.errors.releaseDate;
    const expected = 'Date should be a valid one';

    expect(actual).toEqual(expected);
  });
});