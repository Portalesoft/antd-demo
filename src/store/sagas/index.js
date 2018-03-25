import { all } from 'redux-saga/effects';
import { loginSagas } from './login';
import { registerSagas } from './register';
import { dashboardSagas } from './dashboard';
import { validationSagas } from './validation';

export default function* rootSaga() {
    yield all([
        ...loginSagas,
        ...registerSagas,
        ...dashboardSagas,
        ...validationSagas
    ]);
}


