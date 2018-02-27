import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    // Link,
    Redirect,
    // withRouter,
} from 'react-router-dom'


// main component routes to be rendered
import Dashboard from '../components/dashboard';
import Login from '../components/login';

// authentication routes
import Authentication from '../authentication';


export default () => (
    <Router>
        <Switch>
            <PrivateRoute path="/" exact component = {Dashboard} />
            <Route path="/login" render={props => <Login {...props} />} />
        </Switch>
    </Router>
);


// should call the authentication folder to see if authenticated.  If not it will redirect to login.
// separating this in a function allows you to build multiple ensure authenticated routes in your switch board
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Authentication.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
                // passes the url that was originally tried to be accessed to the login page. This will allow for it to redirect back.
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );