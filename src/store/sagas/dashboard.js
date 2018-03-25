import { take, put, call, fork, cancel, all, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as actions from '../actions';
import * as actionTypes from '../actions/actionTypes';

const randomIntFromInterval = (min,max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function* dashboardInitialiseSaga() {

    // Start background tasks to update the dashboard
    const bgTicketsSagaTask = yield fork(dashboardTicketsSaga);
    const bgProgressSagaTask = yield fork(dashboardProgressSaga);
    const bgStatisticsSagaTask = yield fork(dashboardStatisticsSaga);
    
    // Wait for the dashboard sync stop task which will be called when the dashboard component unmounts
    yield take(actionTypes.DASHBOARD_SYNC_STOP);
    yield all ([
        cancel(bgTicketsSagaTask),
        cancel(bgProgressSagaTask),            
        cancel(bgStatisticsSagaTask)            
    ]);
    
}

function* dashboardTicketsSaga() {
    while (true) {
        let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        let values = [];
        days.forEach((day, index) => {
            values.push({
                day: day,
                closedTickets: randomIntFromInterval(1, 30),
                openedTickets: randomIntFromInterval(10, 40)
            });
        });
        yield call(delay, 1000);
        yield put(actions.dashboardUpdateTicketsChart(values));
        yield call(delay, 4000);
    }
}

function* dashboardProgressSaga() {
    while (true) {
        const values = {
            response: randomIntFromInterval(58,83),
            solved: randomIntFromInterval(45,72)
        };
        yield call(delay, 7000);
        yield put(actions.dashboardUpdateProgress(values));
    }
}

function* dashboardStatisticsSaga() {
    while (true) {
        const values = {
            openTickets: randomIntFromInterval(10,43),
            ticketsToday: randomIntFromInterval(5,27),
            urgentTickets: randomIntFromInterval(1,16)
        };
        yield call(delay, 8000);
        yield put(actions.dashboardUpdateStatistics(values));
    }
}

export const dashboardSagas = [
    takeEvery(actionTypes.DASHBOARD_SYNC_START, dashboardInitialiseSaga)
];