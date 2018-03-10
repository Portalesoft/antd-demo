import * as actionTypes from './actionTypes';

export const loginUser = (email, password) => {
    return {
        type: actionTypes.LOGIN_USER,
        email: email,
        password: password
    }
};

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

export const loginSuccess = (token, userId) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        userId: userId
    };
};

export const loginFail = () => {
    return {
        type: actionTypes.LOGIN_FAIL
    };
};

export const loginCheckStatus = () => {
    return  {
        type: actionTypes.LOGIN_CHECK_STATUS
    };
};

export const logoutUser = () => {
    return {
        type: actionTypes.LOGOUT_USER
    };
};

export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    };
}