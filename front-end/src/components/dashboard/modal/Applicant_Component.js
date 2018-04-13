import React, { Component } from 'react';
import PostingsApplied from './Postings_applied'
// import ModalTypes from './Modal-types.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 class ApplicantComponent extends Component {

    render() {
        const currentApplicant = this.props.applicantData

        return (
            <div className="modal-overlay" data-modal-container-applicantcomponent>
                <div className="modal-container">
                    <div className="modal-header"><h2><strong>{this.props.applicantData[0].firstName} {this.props.applicantData[0].lastName}</strong></h2></div>
                    <div className="modal-body applicant-component-body">
                        <div className='applicant-component-left-side'>
                            <div className='applicant-component-section-title'>Personal Information</div>
                            <div className='applicant-component-information-container'>
                                <div className='applicant-component-information'>
                                    <div className="applicant-component-datafield"><strong>{this.props.applicantData[0].firstName} {this.props.applicantData[0].lastName}</strong></div>
                                    <div className="applicant-component-datafield">{this.props.applicantData[0].email}</div>
                                    <div className="applicant-component-datafield">{this.props.applicantData[0].phone}</div>
                                    <div className="applicant-component-datafield"><a href='{this.props.applicantData[0].linked_in}'>{this.props.applicantData[0].linked_in}</a></div>
                                    <div className="applicant-component-datafield">{this.props.applicantData[0].recruiter_notes}</div>
                                </div>
                            </div>
                            {/* <div>
                                <div className='applicant-component-section-title'>Relevant Postings</div>
                                <PostingsApplied postingRecords={this.props.postingData} currentApplicantsPostings={this.props.currentApplicantsPostings}/>
                            </div> */}
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

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps({ postingData, applicantData, selectedApplicant }) {
    return {
        postingData,
        applicantData,
        selectedApplicant
    }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ApplicantComponent);
// export default ApplicantComponent;