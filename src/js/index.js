import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App.js';
import allReducers from './reducers/index.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(allReducers, applyMiddleware(thunk));

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));