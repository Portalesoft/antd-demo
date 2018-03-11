import { put, call } from 'redux-saga/effects';
import axios from '../../config/axios-authentication';
import * as actions from '../actions';

export function* loginSaga(action) { 

    // Initiate the login process
    yield put(actions.loginStart());

    // Instead of catching errors via a promise catch we use a try catch block ...
    try {

        const loginCredentials = {
            email: action.email,
            password: action.password,
            returnSecureToken: true
        };

        // Axios post returns a promise, yield is not exposed by redux saga but is a next gen js feature connected to generators
        // By using yield the post no longer returns a promise but waits for the promise to resolve or reject, the value being stored in the response
        const response = yield axios.post('/verifyPassword?key=AIzaSyCn5-4vBc4m-ix5upyBoj2_mt_rLxgZRRA', loginCredentials);
        if (response) {

            // Firebase also returns a refreshToken, which can be passed with api calls in order to update the api token automatically
            // when it expires, this can have security issues though as it never expires. The use of yield call is to allow mock testing at a later date
            const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
            yield call([localStorage, 'setItem'], 'token', response.data.idToken);
            yield call([localStorage, 'setItem'], 'userId', response.data.localId);
            yield call([localStorage, 'setItem'], 'expirationDate', expirationDate);
            yield put(actions.loginSuccess(response.data.idToken, response.data.localId));
            // yield put(actions.checkAuthTimeout(response.data.expiresIn));
            return;

        }

    } catch (error) {} 

    // If we get here simply terminate the login process
    yield put(actions.loginFail());

}

export function* loginCheckStatusSaga(action) {

    const token = yield localStorage.getItem('token');
    if (!token) {
        // yield put(actions.logout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            // yield put(actions.logout());
        } else {
            const userId = localStorage.getItem('userId');
            yield put(actions.loginSuccess(token, userId));
            // yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
    }

}

export function* logoutSaga(action) {
    yield call([localStorage, 'removeItem'], "token");
    yield call([localStorage, 'removeItem'], "userId");
    yield call([localStorage, 'removeItem'], "expirationDate");
    yield put (actions.logoutSuccess());    
}