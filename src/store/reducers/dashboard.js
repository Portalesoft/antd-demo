import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
    ticketsChartData: [],
    supportCallsChartData: []
}

const dashboardSyncStop = (state, action) => {
    return update(state, {
        ticketsChartData: { $set: [] },
        supportCallsChartData: { $set: [] },
    });
}

const dashboardUpdateTicketsChartData = (state, action) => {
    return update(state, {
        ticketsChartData: { $set: action.values }
    });
}

const dashboardUpdateSupportCallsChartData = (state, action) => {
    return update(state, {
        supportCallsChartData: { $set: action.values }
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DASHBOARD_UPDATE_TICKETS_CHART: 
            return dashboardUpdateTicketsChartData(state, action);
        case actionTypes.DASHBOARD_UPDATE_SUPPORT_CALLS_CHART: 
            return dashboardUpdateSupportCallsChartData(state, action);
        case actionTypes.DASHBOARD_SYNC_STOP: 
            return dashboardSyncStop(state, action);
        default:
            return state;
    }
}

export default reducer;