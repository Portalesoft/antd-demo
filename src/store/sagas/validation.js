import { call, put, takeEvery } from 'redux-saga/effects';
import moment from 'moment';
import { delay } from 'redux-saga';

import * as actions from '../actions';
import * as actionTypes from '../actions/actionTypes';

const data = {
    Mandatory: 'Something important',
    Feedback: 'Hello world',
    Warning: 'langley',
    FutureFeedback: moment('2019-05-31'), 
    StartDate: moment('2018-03-01'),
    EndDate: moment('2018-04-01'),
    MaxLength: '123',
    MinLength: '7 chars',
    GBP: '100.00',
    USD: '141.00',
    AsyncChange: 'coventry',
    AsyncBlur: 'Test',
    CombinedEnable: true,
    CombinedVisible: true,
    Enabled: 'Enabled',
    Visible: 'Visible'
};

function* validationLoadSaga(action) { 
    yield put(actions.validationLoadStart());
    yield call(delay, 1000);
    yield put(actions.validationLoadSuccess(data));
}

export const validationSagas = [
    takeEvery(actionTypes.VALIDATION_LOAD, validationLoadSaga)
];