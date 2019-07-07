import presenters from './presenters';

describe('presenters.processSubmit', () => {

  let currentViewModel
  let updateViewModelCallBack
  let submitRequestCallBack
  beforeEach(() => {
    currentViewModel = {
      projectId: 999,
      releaseName: 'Exceptional Release',
      releaseDate: '2016-06-08',
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
      releaseName: 'Exceptional Release',
      releaseDate: '2016-06-08'
    };

    expect(submitRequestCallBack).toBeCalledWith(expected);
  });

  it('should update view model when we got validation errors', () => {
    currentViewModel.releaseName = '';
    presenters.processSubmit(currentViewModel, updateViewModelCallBack, submitRequestCallBack);

    const expected = {
      errors: {
        releaseName: 'Name is required'
      }
    };

    expect(updateViewModelCallBack).toBeCalledWith(expected);
  });
});