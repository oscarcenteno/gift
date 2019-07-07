import reportIncidentsRequest from './reportIncidentsRequest';

describe('reportIncidentsRequest', () => {

  let request
  beforeEach(() => {
    let viewModel = {
      projectId: 999,
      reportDate: '2016-06-08',
      totalIncidents: '2',
      rationale: 'Some issues'
    };
    request = reportIncidentsRequest.get(viewModel);
  })

  it('should contain the project id', () => {
    const actual = request.projectId;
    const expected = 999;

    expect(actual).toEqual(expected);
  });

  it('should contain the total incidents', () => {
    const actual = request.totalIncidents;
    const expected = '2';

    expect(actual).toEqual(expected);
  });

  it('should contain the report date', () => {
    const actual = request.reportDate;
    const expected = '2016-06-08';

    expect(actual).toEqual(expected);
  });

  it('should contain the rationale', () => {
    const actual = request.rationale;
    const expected = 'Some issues';

    expect(actual).toEqual(expected);
  });

});