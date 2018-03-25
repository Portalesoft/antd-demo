import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
    data: null,
    loading: false,
    error: null
}

const validationLoadStart = (state, action) => {
    return update(state, {
        loading: { $set: true },
        error: { $set: null },
    });
}

const validationLoadSuccess = (state, action) => {
    return update(state, {
        loading: { $set: false },
        data: { $set: action.data },
        error: { $set: null }
    });
}

const validationLoadFail = (state, action) => {
    return update(state, {
        loading: { $set: false },
        error: { $set: action.error }
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.VALIDATION_LOAD_START: 
            return validationLoadStart(state, action);
        case actionTypes.VALIDATION_LOAD_SUCCESS: 
            return validationLoadSuccess(state, action);
        case actionTypes.VALIDATION_LOAD_FAIL: 
            return validationLoadFail(state, action);
        default:
            return state;
    }
}

export default reducer;