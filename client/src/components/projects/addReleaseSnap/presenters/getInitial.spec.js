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

  it('should contain an empty release name', () => {
    const actual = viewModel.releaseName;
    const expected = '';

    expect(actual).toEqual(expected);
  });

  it('should contain an empty release date', () => {
    const actual = viewModel.releaseDate;
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