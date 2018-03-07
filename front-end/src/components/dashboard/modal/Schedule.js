import React, { Component } from 'react';
// import axios from 'axios';
// import ModalTypes from './Modal-types.js';

 class ScheduleMeeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calendlyLink: "https://calendly.com/tcampb31/test-1/03-06-2018?back=1",
            applicantName: "",
            applicantEmail: ""
        }
    }

    _clickHandler = () => {
        this.setState
    }

    render() {
        
        return (
            <div className="modal-overlay" data-modal-container-schedule-meeting>
                <div className="modal-container schedule-meeting-container">
                    <div className="modal-header"><h2>Schedule Meeting</h2></div>
                    <div className="modal-body" id="schedule">
                        <iframe src={`${this.state.calendlyLink}?name=${this.state.applicantName}&email=${this.state.applicantEmail}`} width="100%" height="100%" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleMeeting;