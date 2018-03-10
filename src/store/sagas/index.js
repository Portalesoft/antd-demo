import { takeEvery, take, fork, cancel, all } from 'redux-saga/effects'; 
import { loginSaga, loginCheckStatusSaga, logoutSaga } from './login';
import { dashboardTicketsSaga, dashboardSupportCallsSaga } from './dashboard';
import * as actionTypes from '../actions/actionTypes';

export function* watchLogin() {
    yield takeEvery(actionTypes.LOGIN_USER, loginSaga);
    yield takeEvery(actionTypes.LOGIN_CHECK_STATUS, loginCheckStatusSaga);
    yield takeEvery(actionTypes.LOGOUT_USER, logoutSaga);
}

export function* watchDashboard() {

    // Permanently watch for the dashboard sync start which will be called when the dashboard component mounts
    while ( yield take(actionTypes.DASHBOARD_SYNC_START) ) {

        // Start background tasks to update the dashboard
        const bgTicketsSagaTask = yield fork(dashboardTicketsSaga);
        const bgSupportCallsSagaTask = yield fork(dashboardSupportCallsSaga);
        
        // Wait for the dashboard sync stop task which will be called when the dashboard component unmounts
        yield take(actionTypes.DASHBOARD_SYNC_STOP);
        yield all ([
            cancel(bgTicketsSagaTask),
            cancel(bgSupportCallsSagaTask)
        ]);

    }

}