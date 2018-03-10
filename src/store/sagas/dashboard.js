import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';

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
        yield put(actions.dashboardUpdateSupportCallsChart(values));
        yield call(delay, 8000);
    }

}

