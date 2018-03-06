import React, { Component } from 'react';
import PostingsApplied from './Postings_applied'
// import ModalTypes from './Modal-types.js';

 class ApplicantComponent extends Component {

    render() {
        return (
            <div className="modal-overlay" data-modal-container-applicantcomponent>
                <div className="modal-container">
                    <div className="modal-header"><h2><strong>{this.props.currentApplicant[0].firstName} {this.props.currentApplicant[0].lastName}</strong></h2></div>
                    <div className="modal-body applicant-component-body">
                        <div className='applicant-component-left-side'>
                            <div className='applicant-component-section-title'>Personal Information</div>
                            <div className='applicant-component-information-container'>
                                <div className='applicant-component-information'>
                                    <div className="applicant-component-datafield"><strong>{this.props.currentApplicant[0].firstName} {this.props.currentApplicant[0].lastName}</strong></div>
                                    <div className="applicant-component-datafield">{this.props.currentApplicant[0].email}</div>
                                    <div className="applicant-component-datafield">{this.props.currentApplicant[0].phone}</div>
                                    <div className="applicant-component-datafield"><a href='{this.props.currentApplicant[0].linked_in}'>{this.props.currentApplicant[0].linked_in}</a></div>
                                    <div className="applicant-component-datafield">{this.props.currentApplicant[0].recruiter_notes}</div>
                                </div>
                            </div>
                            <div>
                                <div className='applicant-component-section-title'>Relevant Postings</div>
                                <PostingsApplied postingRecords={this.props.postingRecords} currentApplicantsPostings={this.props.currentApplicantsPostings}/>
                            </div>
                        </div>
                        <div className='applicant-component-right-side'>
                            <div></div>
                            {/* <img src="./resume-image.png" alt="basic resume"/> */}
                        </div>
                    
                    </div>
                    <div className="modal-footer">
                        <button id='applicantcomponent' onClick={this.props.closeModalCorrectly}>Cancel</button>
                        {/* <button>Save & New</button> */}
                        {/* {<button type="submit" id='posting' onClick={this.props.onFormSubmission}>Save</button>} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default ApplicantComponent;