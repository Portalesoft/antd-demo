import Validators from 'redux-form-validators';

export const applyValidators = () => {

    // Modify default validation messages
    Object.assign(Validators.messages, {
        presence: "is a required field",
        email: "is not a valid email address"
    });

}

