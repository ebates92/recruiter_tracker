import React, { Component } from 'react';
// import axios from 'axios';
// import ModalTypes from './Modal-types.js';

 class NewPosting extends Component {

    render() {
        return (
            <div className="modal-overlay" data-modal-container-user-calendly>
                <div className="modal-container">
                    <div className="modal-header"><h2>Calendly Link</h2></div>
                    <div className="modal-body">
                        <form>

                                <div className="ui-input"><span></span><span>Enter Calendly link below:</span>
                                <div className="clearfix"></div>
                                <input type="text" name="calendly_url" onChange={this.props.onFormChangeHandler} value={this.props.calendly_url}/></div>
                    
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button id='user-calendly' onClick={this.props.closeModalCorrectly}>Cancel</button>
                        {/* <button>Save & New</button> */}
                        <button type="submit" id='user-calendly' onClick={this.props.onFormSubmission}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPosting;