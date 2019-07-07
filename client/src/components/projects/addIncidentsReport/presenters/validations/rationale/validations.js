const validations = {
  validate(name) {
    let error;

    if (!name) {
      error = 'Rationale is required';
    }
    else {
      const trimmedName = name.trim();
      if (!trimmedName) {
        error = 'Rationale is required';
      }
      else {
        if (trimmedName.length > 2000)
          error = 'Rationale has a max of 2000 characters';
        else
          error = undefined;
      }
    }
    
    return error;
  }
};

export default validations;