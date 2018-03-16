import { put, call } from 'redux-saga/effects';
import axios from '../../config/axios-authentication';
import * as actions from '../actions';

export function* registerSaga(action) { 

    // Initiate the login process
    yield put(actions.loginStart());

    // Hijacking the login process for registration purely for demo purposes
    try {

        const registerCredentials = {
            email: action.email,
            password: action.password,
            returnSecureToken: true
        };

        const response = yield axios.post('/signupNewUser?key=AIzaSyCn5-4vBc4m-ix5upyBoj2_mt_rLxgZRRA', registerCredentials);
        const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield call([localStorage, 'setItem'], 'token', response.data.idToken);
        yield call([localStorage, 'setItem'], 'userId', response.data.localId);
        yield call([localStorage, 'setItem'], 'expirationDate', expirationDate);
        yield put(actions.loginSuccess(response.data.idToken, response.data.localId));
        // yield put(actions.checkAuthTimeout(response.data.expiresIn));
        return;

    } catch (error) {
        yield put(actions.loginFail(error));
    } 

}