import reportIncidentsRequest from './requests/reportIncidentsRequest';
import fieldsValidation from './validations/fields/validation';
import rationaleValidations from './validations/rationale/validations';
import reportDateValidations from './validations/reportDate/validations';
import totalIncidentsValidations from './validations/totalIncidents/validations';

const presenters = {
  getInitial(props, formCallbacks) {
    return {
      projectId: props.projectId,
      projectName: props.projectName,
      reportDate: '',
      totalIncidents: '0',
      rationale: '',
      errors: {},
      formCallbacks: formCallbacks
    };
  },

  processSubmit(currentViewModel, updateViewModel, submitRequest) {
    let errors = fieldsValidation.validate(currentViewModel);
    let hasNoErrors = !fieldsValidation.hasErrors(errors);

    if (hasNoErrors) {
      const request = reportIncidentsRequest.get(currentViewModel);
      submitRequest(request);
    }
    else {
      const newViewModel = { errors: errors }
      updateViewModel(newViewModel);
    }
  },

  getOnRationaleChange(event, currentViewModel) {
    // Get state
    const newValue = event.target.value;
    let { errors } = currentViewModel;

    const isNotEmpty = newValue.trim();

    if (isNotEmpty)
      errors.rationale = rationaleValidations.validate(newValue);
    else
      errors.rationale = rationaleValidations.validate('');

    return { errors: errors, rationale: newValue };
  },

  getOnReportDateChange(newValue, currentViewModel) {
    // Get state
    let { errors } = currentViewModel;

    // Validate
    errors.reportDate = reportDateValidations.validate(newValue);

    return { errors: errors, reportDate: newValue };
  },

  getOnTotalIncidentsChange(event, currentViewModel) {
    // Get state
    let newValue = event.target.valueAsNumber;
    let { errors } = currentViewModel;

    // Validate
    errors.totalIncidents = totalIncidentsValidations.validate(newValue);

    return { errors: errors, totalIncidents: newValue };
  }
};

export default presenters;