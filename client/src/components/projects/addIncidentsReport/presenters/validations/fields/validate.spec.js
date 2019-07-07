import validation from './validation';

describe('Validation for all fields should validate', () => {

  let viewModel
  beforeEach(() => {
    viewModel = {
      totalIncidents: '2',
      reportDate: '2016-11-15',
      rationale: 'Some issues'
    };
  })

  it('Valid scenario', () => {
    let actual = validation.validate(viewModel);
    let expected = {"totalincidents": undefined, "reportDate": undefined, "rationale": undefined};

    expect(actual).toEqual(expected);
  });

  it('Rationale is not valid', () => {
    viewModel.rationale = '';
    let errors = validation.validate(viewModel);
    let actual = errors.rationale;

    expect(actual).toBeTruthy();
  });

  it('Report date is not valid', () => {
    viewModel.reportDate = '';
    let errors = validation.validate(viewModel);
    let actual = errors.reportDate;

    expect(actual).toBeTruthy();
  });

  it('Total incidents is not valid', () => {
    viewModel.totalIncidents = '';
    let errors = validation.validate(viewModel);
    let actual = errors.totalIncidents;

    expect(actual).toBeTruthy();
  });

});