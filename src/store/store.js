import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/index.js';

export default function(initialState) {
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
}
