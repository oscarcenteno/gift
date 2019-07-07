import presenters from './presenters';

describe('presenters.getOnReportDateChange', () => {

  let viewModel
  beforeEach(() => {
    const currentViewModel = {
      errors: { reportDate: undefined },
      reportDate: undefined
    };
    viewModel = presenters.getOnReportDateChange(' ', currentViewModel);

  })

  it('Should set the new value', () => {
    const actual = viewModel.reportDate;
    const expected = ' ';

    expect(actual).toEqual(expected);
  });

  it('Should set error when new value is invalid', () => {
    const actual = viewModel.errors.reportDate;
    const expected = 'Date should be a valid one';

    expect(actual).toEqual(expected);
  });
});