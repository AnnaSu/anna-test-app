import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'normalize.css';
import createStore from './store/store.js';
import Router from './router/router.js';

const store = createStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(<Provider store={store}>
    <Router history={ history } />
</Provider>, document.getElementById('root'));

registerServiceWorker();
