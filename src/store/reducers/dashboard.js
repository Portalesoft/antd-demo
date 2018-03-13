import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
    ticketsChartData: [],
    statisticsData: {
        openTickets: 24,
        ticketsToday: 10,
        urgentTickets: 4
    },
    progressData: {
        response: 72,
        solved: 58
    }
}

const dashboardSyncStop = (state, action) => {
    return update(state, {
        ticketsChartData: { $set: [] }
    });
}

const dashboardUpdateTicketsChartData = (state, action) => {
    return update(state, {
        ticketsChartData: { $set: action.values }
    });
}

const dashboardUpdateStatistics = (state, action) => {
    return update(state, {
        statisticsData: { $set: action.values }
    });
}

const dashboardUpdateProgress = (state, action) => {
    return update(state, {
        progressData: { $set: action.values }
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DASHBOARD_UPDATE_TICKETS_CHART: 
            return dashboardUpdateTicketsChartData(state, action);
        case actionTypes.DASHBOARD_UPDATE_STATISTICS: 
            return dashboardUpdateStatistics(state, action);
        case actionTypes.DASHBOARD_UPDATE_PROGRESS: 
            return dashboardUpdateProgress(state, action);
        case actionTypes.DASHBOARD_SYNC_STOP: 
            return dashboardSyncStop(state, action);
        default:
            return state;
    }
}

export default reducer;