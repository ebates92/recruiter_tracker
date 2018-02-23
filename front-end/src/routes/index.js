import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'


// main routes to be rendered
import Dashboard from '../components/dashboard'
import Login from '../components/login'


export default () => (
    <Router>
        <Switch>
            <Route path="/" render={props => <Dashboard {...props} />} />
            <Route path="/login" render={props => <Login {...props} />} />
        </Switch>
    </Router>
);