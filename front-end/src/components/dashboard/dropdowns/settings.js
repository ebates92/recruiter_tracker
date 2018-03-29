import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const url = 'http://localhost:3000';

class SettingsDropdown extends Component {
    
    logoutSession = () => {
        axios.post(`${url}/auth/logout`)
        .then(res => window.location.replace('/login'))
        .catch(e => console.log("Already logged out."));
    }

    render() {

        return (
            <div className='form-dropdown-container settings-dropdown-container'>
                <div className="settings-user-data">
                    <div>{this.props.userData.email}</div>
                    <div>link: {this.props.userData.calendly_url}</div>
                </div>
                {/* <div className='form-dropdowns'>Profile</div> */}
                <div className='form-dropdowns' onClick={this.props.calendly_urlClickHandler}>Calendly Link</div>
                <div className='form-dropdowns'onClick={this.logoutSession}>Logout</div>
            </div>
        )
    }
}

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps(state) {
    return {

    }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    return bindActionCreators({},dispatch)
}

// export default connect(mapStateToProps,mapDispatchToProps)(SettingsDropdown);
export default SettingsDropdown;