import rationaleValidations from '../rationale/validations';
import reportDateValidations from '../reportDate/validations';
import totalIncidentsValidations from '../totalIncidents/validations';

const validation = {
  validate(state) {
    let errors = {};

    const {rationale} = state;
    errors.rationale = rationaleValidations.validate(rationale);

    const {reportDate} = state;
    errors.reportDate = reportDateValidations.validate(reportDate);

    const {totalIncidents} = state;
    errors.totalIncidents = totalIncidentsValidations.validate(totalIncidents);

    return errors;
  },

  hasErrors(errors) {
    if (errors.rationale || errors.reportDate || errors.totalIncidents) {
      return true;
    }
    else
      return false;
  }
};

export default validation;