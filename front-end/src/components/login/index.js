import React from 'react';
import Authentication from '../../authentication'
import { Redirect, Link } from 'react-router-dom'

// this will be the login page component
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        }
        // this.onLoginFormChangeHandler = this.onLoginFormChangeHandler.bind(this);
    }

    // within a class you don't need to use const or let
    // will take you to the authentication login for what you submit
    login = () => {
        Authentication.authenticate(() => {
            this.setState({ redirectToReferrer: true })
        })
    }

    onLoginFormChangeHandler = (event) => {
        const input = event.target.name;
        const value = event.target.value;
        this.setState({
              [input]: value
            }
        )
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
            <div className="login-container">

                <div className="login-title">Sign-in with:</div>
                <div className="login-passport">
                    <button onClick={this.login}>LinkedIn</button>
                    <button onClick={this.login}>Google</button>
                </div>

                <div className="login-email-password">
                    <input type='email' name='email' onChange={this.onLoginFormChangeHandler} placeholder='email' />
                    <input type='password' name='password' onChange={this.onLoginFormChangeHandler} placeholder='password' />
                    <button className="sign-in" onClick={this.login}>Sign in</button>
                    <Link className="forgot-password" to='/forgotpassword'>Forgot password</Link>
                </div>

                <div className="login-email-password">

                    <label>First name:</label>
                    <input name="firstname" type='text' value={this.state.firstname} onChange={this.onLoginFormChangeHandler} />

                    <label>Last name:</label>
                    <input name="lastname" type='text' onChange={this.onLoginFormChangeHandler} />

                    <label>Email:</label>
                    <input name="email" type='email' onChange={this.onLoginFormChangeHandler} />

                    <label>Password:</label>
                    <input name="password" type='password' onChange={this.onLoginFormChangeHandler} />

                    <button onClick={this.login}>Join for free</button>
                </div>
            </div>
        )
    }
}

export default Login;