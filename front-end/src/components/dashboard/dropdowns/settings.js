import React, { Component } from 'react';
import axios from 'axios';
const url = 'http://localhost:3000';

class SettingsDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            userData: '',
        })
    }

    // componentDidMount() {
    //     console.log('api request occurring')
    //       axios.get(`${url}/api/user`)
    //         .then(res => res.data)
    //         .then(
    //           (userData) => {
    //             this.setState({
    //                 userData
    //             });
    //           },
    //           (error) => {
    //             this.setState({
    //               error
    //             })
    //           }
    //         )

    render() {
        return (
            <div className='form-dropdown-container settings-dropdown-container'>
                <div className="settings-user-data">
                    <div>example@gmail.com</div>
                    <div>API Key</div>
                </div>
                <div className='form-dropdowns' onClick={this.props.settingsClickHandler}>Profile</div>
                <div className='form-dropdowns' onClick={this.props.settingsClickHandler}>Calendly Link</div>
                <div className='form-dropdowns' onClick={this.props.settingsClickHandler}>Logout</div>
            </div>
        )
    }

}

export default SettingsDropdown;