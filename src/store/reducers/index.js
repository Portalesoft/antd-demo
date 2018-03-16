import { combineReducers } from 'redux';
import loginReducer from './login';
import dashboardReducer from './dashboard';
import { reducer as formReducer } from 'redux-form'

export const reducers = combineReducers({
    login: loginReducer,
    dashboard: dashboardReducer,
    form: formReducer
});
