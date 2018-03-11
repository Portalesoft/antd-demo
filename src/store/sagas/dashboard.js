import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';

const randomIntFromInterval = (min,max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function* dashboardTicketsSaga() {

    while (true) {
        let labels = ["Opened Tickets", "Closed Tickets"];
        let colors = ["#e74c3c", "#27ae60"];
        let values = [];
        labels.forEach((label, index) => {
            let data = [];
            for(let i = 0; i < 7; i++) {
                data.push(Math.floor(Math.random() * 10) + i);
            }        
            values.push({
                label,
                data,
                color: colors[index]
            });
        });
        yield call(delay, 5000);
        yield put(actions.dashboardUpdateTicketsChart(values));
    }

}

export function* dashboardSupportCallsSaga() {

    while (true) {
        let labels = ["Langley", "Coventry", "Hong Kong"];
        let colors = ["#5d9cec", "#37bc9b", "#7266ba"];
        let values = [];
        labels.forEach((label, index) => {
            let data = [];
            for(let i = 0; i < 7; i++) {
                data.push(Math.floor(Math.random() * 10) + i);
            }        
            values.push({
                label,
                data,
                color: colors[index]
            });
        });
        yield call(delay, 6000);
        yield put(actions.dashboardUpdateSupportCallsChart(values));
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
