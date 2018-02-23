import React from 'react';
import Authentication from '../../authentication'
import { Redirect } from 'react-router-dom'

// this will be the login page component
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        }
    }

    // within a class you don't need to use const or let
    login = () => {
        Authentication.authenticate(() => {
            this.setState({ redirectToReferrer: true })
        })
    }

    
    render() {
        // ask Chris about this structure. didn't know you could have js in the render...
        const { from } = this.props.location.state || { from: { pathname: '/' }}
        const { redirectToReferrer } = this.state;

        // will redirect user to requested page if already authenticated
        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div>
                <button onClick={this.login}>Log in</button>
                <h1>I'M WORKING</h1>
            </div>
        )
    }
}

export default Login;