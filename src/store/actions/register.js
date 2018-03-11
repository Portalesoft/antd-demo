import * as actionTypes from './actionTypes';

export const registerUser = (email, password) => {
    return {
        type: actionTypes.REGISTER_USER,
        email: email,
        password: password
    }
};
