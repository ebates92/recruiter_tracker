import React, { Component } from 'react';
// import axios from 'axios';
// import ModalTypes from './Modal-types.js';

 class ScheduleMeeting extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         calendlyLink: "https://calendly.com/tcampb31/test-1/03-06-2018?back=1",
    //         applicantName: "",
    //         applicantEmail: ""
    //     }
    // }

    // _clickHandler = () => {
    //     this.setState
    // }

    render() {
        
        return (
            <div className="modal-overlay" data-modal-container-schedule>
                <div className="modal-container">
                    <div className="modal-header"><h2>Schedule Meeting</h2></div>
                    <div className="modal-body">
                            <div>TEST</div>
                    </div>
                    <div className="modal-footer">
                        <button id='schedule-calendly' onClick={this.props.closeModalCorrectly}>Cancel</button>
                        {/* <button>Save & New</button> */}
                        <button type="submit" id='schedule-calendly' onClick={this.props.onFormSubmission}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleMeeting;