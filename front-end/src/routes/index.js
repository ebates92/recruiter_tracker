import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
    withRouter,
} from 'react-router-dom'


// main component routes to be rendered
import Dashboard from '../components/dashboard';
import Login from '../components/login';

// authentication routes
import Authentication from '../authentication';


export default () => (
    <Router>
        <Switch>
            <PrivateRoute path="/" component = {Dashboard} />
            <Route path="/login" render={props => <Login {...props} />} />
        </Switch>
    </Router>
);


// should call the authentication folder to see if authenticated.  If not it will redirect to login.
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Authentication.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );