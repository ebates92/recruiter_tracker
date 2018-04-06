import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import RootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

const ReduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let store = createStore(RootReducer, ReduxDev);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));
// registerServiceWorker();
