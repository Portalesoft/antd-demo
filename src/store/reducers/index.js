import { combineReducers } from 'redux';
import loginReducer from './login';
import dashboardReducer from './dashboard';

export const reducers = combineReducers({
    login: loginReducer,
    dashboard: dashboardReducer
});
