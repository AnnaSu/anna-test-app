import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app.js';

export default combineReducers({
    routing: routerReducer,
    app
});
