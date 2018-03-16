import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';

const randomIntFromInterval = (min,max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function* dashboardTicketsSaga() {

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

export function* dashboardProgressSaga() {

    while (true) {
        const values = {
            response: randomIntFromInterval(58,83),
            solved: randomIntFromInterval(45,72)
        };
        yield call(delay, 7000);
        yield put(actions.dashboardUpdateProgress(values));
    }

}

export function* dashboardStatisticsSaga() {

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
