import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import RootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

let store = createStore(RootReducer);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));
// registerServiceWorker();
