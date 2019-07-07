import presenters from './presenters';

describe('presenters.getInitial', () => {

  let viewModel
  beforeEach(() => {
    let props = { projectId: 999, projectName: 'Exceptional' };
    let formCallbacks = {};
    viewModel = presenters.getInitial(props, formCallbacks);
  })

  it('should contain the project id from props', () => {
    const actual = viewModel.projectId;
    const expected = 999;

    expect(actual).toEqual(expected);
  });

  it('should contain the project name from props', () => {
    const actual = viewModel.projectName;
    const expected = 'Exceptional';

    expect(actual).toEqual(expected);
  });

  it('should contain an empty rationale', () => {
    const actual = viewModel.rationale;
    const expected = '';

    expect(actual).toEqual(expected);
  });

  it('should contain cero total incidents', () => {
    const actual = viewModel.totalIncidents;
    const expected = '0';

    expect(actual).toEqual(expected);
  });

  it('should contain an empty report date', () => {
    const actual = viewModel.reportDate;
    const expected = '';

    expect(actual).toEqual(expected);
  });
  
  it('should contain an empty errors list', () => {
    const actual = viewModel.errors;
    const expected = {};

    expect(actual).toEqual(expected);
  });
    
  it('should contain the given formCallbacks', () => {
    const actual = viewModel.formCallbacks;
    const expected = {};

    expect(actual).toEqual(expected);
  });
});