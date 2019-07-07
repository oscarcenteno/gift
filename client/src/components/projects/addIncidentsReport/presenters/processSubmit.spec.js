import presenters from './presenters';

describe('presenters.processSubmit', () => {

  let currentViewModel
  let updateViewModelCallBack
  let submitRequestCallBack
  beforeEach(() => {
    currentViewModel = {
      projectId: 999,
      rationale: 'Some issues',
      reportDate: '2016-06-08',
      totalIncidents: '2',
      errors: {},
      formCallbacks: {}
    };
    updateViewModelCallBack = jest.fn();
    submitRequestCallBack = jest.fn();
  })

  it('should submit the correct request when there are no validation errors', () => {
    presenters.processSubmit(currentViewModel, updateViewModelCallBack, submitRequestCallBack);

    const expected = {
      projectId: 999,
      rationale: 'Some issues',
      reportDate: '2016-06-08',
      totalIncidents: '2'
    };

    expect(submitRequestCallBack).toBeCalledWith(expected);
  });

  it('should update view model when we got validation errors', () => {
    currentViewModel.rationale = '';
    presenters.processSubmit(currentViewModel, updateViewModelCallBack, submitRequestCallBack);

    const expected = {
      errors: {
        rationale: 'Rationale is required'
      }
    };

    expect(updateViewModelCallBack).toBeCalledWith(expected);
  });
});