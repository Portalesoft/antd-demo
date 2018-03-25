import * as actionTypes from './actionTypes';

export const validationLoad = (id) => {
    return {
        type: actionTypes.VALIDATION_LOAD,
        id
    };
};

export const validationLoadStart = () => {
    return {
        type: actionTypes.VALIDATION_LOAD_START,
    };
};

export const validationLoadSuccess = (data) => {
    return {
        type: actionTypes.VALIDATION_LOAD_SUCCESS,
        data
    };
};

export const validationLoadFail = (error) => {
    return {
        type: actionTypes.VALIDATION_LOAD_FAIL,
        error
    };
};

export const validationSubmit = (values, resolve, reject) => {
    return {
        type: actionTypes.VALIDATION_SUBMIT,
        values,
        resolve,
        reject
    };
};
