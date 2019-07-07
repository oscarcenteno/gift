import React from 'react';
import axios from 'axios';

import presenters from "./presenters/presenters";
import DashboardView from './views/DashboardView';
import dashboardService from './dashboardService';

import cycleSnapService from '../addCycleSnap/cycleSnapService';
import releaseSnapService from '../addReleaseSnap/releaseSnapService';
import incidentsReportService from '../addIncidentsReport/incidentsReportService';

export default class DashboardController extends React.Component {
  constructor(props) {
    super(props);

    this.loadDashboard = this.loadDashboard.bind(this);
    
    this.onRequestAddCycleSnap = this.onRequestAddCycleSnap.bind(this);
    this.onAddCycleSnapSubmit = this.onAddCycleSnapSubmit.bind(this);
    this.onSuccessAddingCycleSnap = this.onSuccessAddingCycleSnap.bind(this);

    this.onRequestAddReleaseSnap = this.onRequestAddReleaseSnap.bind(this);
    this.onAddReleaseSnapSubmit = this.onAddReleaseSnapSubmit.bind(this);
    this.onSuccessAddingReleaseSnap = this.onSuccessAddingReleaseSnap.bind(this);

    this.onRequestAddIncidentsReport = this.onRequestAddIncidentsReport.bind(this);
    this.onAddIncidentsReportSubmit = this.onAddIncidentsReportSubmit.bind(this);
    this.onSuccessAddingIncidentsReport = this.onSuccessAddingIncidentsReport.bind(this);

    this.onFormCancel = this.onFormCancel.bind(this);

    const dashboardCallbacks = {
      onRequestAddCycleSnap: this.onRequestAddCycleSnap,
      onAddCycleSnapSubmit: this.onAddCycleSnapSubmit,

      onRequestAddReleaseSnap: this.onRequestAddReleaseSnap,
      onAddReleaseSnapSubmit: this.onAddReleaseSnapSubmit,

      onRequestAddIncidentsReport: this.onRequestAddIncidentsReport,
      onAddIncidentsReportSubmit: this.onAddIncidentsReportSubmit,

      onClose: this.onFormCancel
    }

    this.state = presenters.getInitial(props, dashboardCallbacks);
  }

  componentDidMount() {
    this.loadDashboard();
  }

  loadDashboard() {
    const {projectId} = this.state

    if (isNaN(projectId) || this.isInteger(projectId)) {
      const newViewModel = presenters.getInvalidProjectError();
      this.setState(newViewModel);
    }
    else {
      const onSuccess = presenters.getOnSuccessLoadingDashboard;
      const onError = presenters.getOnErrorLoadingDashboard;
      const axiosGet = axios.get;

      dashboardService
        .load(axiosGet, projectId, onSuccess, onError)
        .then(newViewModel => this.setState(newViewModel));
    }
  }

  isInteger(projectId) {
    return projectId % 1 != 0;
  }

  onRequestAddCycleSnap() {
    const newViewModel = presenters.getShowAddCycleSnapForm();
    this.setState(newViewModel);
  }

  onRequestAddReleaseSnap() {
    const newViewModel = presenters.getShowAddReleaseSnapForm();
    this.setState(newViewModel);
  }

  onRequestAddIncidentsReport() {
    const newViewModel = presenters.getShowAddIncidentsReportForm();
    this.setState(newViewModel);
  }

  onFormCancel() {
    const newViewModel = presenters.getForClosingForms();
    this.setState(newViewModel);
  }

  onAddCycleSnapSubmit(newCycleSnap) {
    const onSuccess = this.onSuccessAddingCycleSnap;
    const onError = presenters.getOnErrorAddingACycleSnap;
    const post = axios.post;

    cycleSnapService.add(newCycleSnap, post, onSuccess, onError).then(newViewModel => this.setState(newViewModel));
  }

  onAddReleaseSnapSubmit(newReleaseSnap) {
    const onSuccess = this.onSuccessAddingReleaseSnap;
    const onError = presenters.getOnErrorAddingAReleaseSnap;
    const post = axios.post;

    releaseSnapService.add(newReleaseSnap, post, onSuccess, onError).then(newViewModel => this.setState(newViewModel));
  }

  onAddIncidentsReportSubmit(newReport) {
    const onSuccess = this.onSuccessAddingIncidentsReport;
    const onError = presenters.getOnErrorAddingAnIncidentsReport;
    const post = axios.post;

    incidentsReportService.add(newReport, post, onSuccess, onError).then(newViewModel => this.setState(newViewModel));
  }

  onSuccessAddingCycleSnap(response) {
    this.loadDashboard();

    return presenters.getSuccessOnAddingACycleSnap();
  }

  onSuccessAddingReleaseSnap(response) {
    this.loadDashboard();

    return presenters.getSuccessOnAddingAReleaseSnap();
  }

  onSuccessAddingIncidentsReport(response) {
    this.loadDashboard();

    return presenters.getSuccessOnAddingAnIncidentReport();
  }

  render() {
    const viewModel = this.state;

    return (<DashboardView viewModel={viewModel}/>)
  }
}