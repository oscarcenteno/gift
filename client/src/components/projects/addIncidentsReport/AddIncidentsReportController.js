import React from 'react';
import PropTypes from 'prop-types';

import presenters from './presenters/presenters';
import AddIncidentsReportView from './views/AddIncidentsReportView';

export default class AddIncidentsReportController extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    const formCallbacks = {
      onReportDateChange: this.changeReportDate(),
      onRationaleChange: this.changeRationale(),
      onTotalIncidentsChange: this.changeTotalIncidents(),
      onClick: this.onSubmit,
      onClose: this.props.onClose
    }

    this.state = presenters.getInitial(props, formCallbacks)
  }

  changeReportDate() {
    return (event) => {
      const newViewModel = presenters.getOnReportDateChange(event, this.state);
      this.setState(newViewModel);
    };
  }

  changeTotalIncidents() {
    return (event) => {
      const newViewModel = presenters.getOnTotalIncidentsChange(event, this.state)
      this.setState(newViewModel);
    };
  }

  changeRationale() {
    return (event) => {
      const newViewModel = presenters.getOnRationaleChange(event, this.state);
      this.setState(newViewModel);
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const updateViewModel = (newViewModel) => this.setState(newViewModel);
    const submitRequest = this.props.onSubmit;
    let currentViewModel = this.state;

    presenters.processSubmit(currentViewModel, updateViewModel, submitRequest);
  }

  render() {
    return (<AddIncidentsReportView viewModel={this.state} />)
  }
}

AddIncidentsReportController.PropTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  projectId: PropTypes.number,
  projectName: PropTypes.string
};