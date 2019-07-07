import constants from '../../constants';

const incidentsReportService = {
  add(incidentsReport, post, onSuccess, onError) {
    const url = `${constants.getApi() }/projects/incidents`;
    
    return post(url, incidentsReport)
      .then((response) => onSuccess(response))
      .catch((error) => onError(error));
  }
}

export default incidentsReportService;