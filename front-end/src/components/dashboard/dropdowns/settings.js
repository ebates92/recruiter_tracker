import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:3000';

class SettingsDropdown extends Component {
    
    render() {

        return (
            <div className='form-dropdown-container settings-dropdown-container'>
                <div className="settings-user-data">
                    <div>{this.props.userData.email}</div>
                    <div>{this.props.userData.calendly_url}</div>
                </div>
                <div className='form-dropdowns'>Profile</div>
                <div className='form-dropdowns' onClick={this.props.calendly_urlClickHandler}>Calendly Link</div>
                <div className='form-dropdowns'>Logout</div>
            </div>
        )
    }

}

export default SettingsDropdown;