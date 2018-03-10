import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
    token: null,
    userId: null,
    authenticating: false
}

const loginStart = (state, action) => {
    return update(state, {
        authenticating: { $set: true }
    });
}

const loginSuccess = (state, action) => {
    return update(state, {
        token: { $set: action.token },
        userId: { $set: action.userId },
        authenticating: { $set: false }
    });
}

const loginFail = (state, action) => {
    return update(state, {
        authenticating: { $set: false }
    });
}

const logoutSuccess = (state, action) => {
    return update(state, {
        token: { $set: null },
        userId: { $set: null },
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START: 
            return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: 
            return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: 
            return loginFail(state, action);
        case actionTypes.LOGOUT_SUCCESS: 
            return logoutSuccess(state, action);
        default:
            return state;
    }
}

export default reducer;