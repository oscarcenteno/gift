import dateValidations from '../date/validations';

const validations = {
  validate(reportDate) {
    let error;

    if (!reportDate)
      error = 'Date is required';
    else
    if (!dateValidations.isValid(reportDate))
      error = 'Date should be a valid one';
    else
      error = undefined;

    return error;
  }
}

export default validations;