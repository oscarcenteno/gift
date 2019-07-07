const validations = {
    validate(totalIncidents) {
        let error = undefined;

        if (isNaN(totalIncidents))
            error = 'Total incidents are required';
        else {
            if (totalIncidents < 1)
                error = 'Total incidents min is 1';
            if (totalIncidents > 100)
                error = 'Total incidents max is 100';
        }

        return error;
    }
}

export default validations;