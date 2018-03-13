import * as actionTypes from './actionTypes';

export const dashboardSyncStart = () => {
    return {
        type: actionTypes.DASHBOARD_SYNC_START
    };
};

export const dashboardSyncStop = () => {
    return {
        type: actionTypes.DASHBOARD_SYNC_STOP
    };
};

export const dashboardUpdateTicketsChart = (values) => {
    return {
        type: actionTypes.DASHBOARD_UPDATE_TICKETS_CHART,
        values: values
    };
};

export const dashboardUpdateStatistics = (values) => {
    return {
        type: actionTypes.DASHBOARD_UPDATE_STATISTICS,
        values: values
    };
};

export const dashboardUpdateProgress = (values) => {
    return {
        type: actionTypes.DASHBOARD_UPDATE_PROGRESS,
        values: values
    };
};