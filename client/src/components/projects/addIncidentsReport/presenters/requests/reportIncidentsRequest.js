const reportIncidentsRequest = {
  get(viewModel) {
    return {
      projectId: viewModel.projectId,
      reportDate: viewModel.reportDate,
      rationale: viewModel.rationale,
      totalIncidents: viewModel.totalIncidents
    }
  }
}

export default reportIncidentsRequest;