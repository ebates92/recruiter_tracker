import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import RootReducer from './reducers';

// const ReduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)

// let store = createStore(RootReducer,createStoreWithMiddleware);

// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxDev)(createStore)

// SETS UP THE STORE WITH DEVTOOLS AND REDUX-PROMOSE.  NEED TO REVIEW WHAT COMPOSE DOES...
let store = null

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    const middleware = [promiseMiddleware]
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const enhancer = composeEnhancers(applyMiddleware(...middleware))
    store = createStore(RootReducer, enhancer)
}


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));
// registerServiceWorker();
