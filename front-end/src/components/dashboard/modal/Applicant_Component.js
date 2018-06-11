import React, { Component } from 'react';
import PostingsApplied from './Postings_applied'
// import ModalTypes from './Modal-types.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateSelectedApplicant from '../../../actions/selected.js'

 class ApplicantComponent extends Component {

    closeModal = () => {
        this.props.updateSelectedApplicant({
            target: {id:'applicant'},
            currentTarget: {accessKey: null}
          })
    }


    render() {
        const currentApplicant = this.props.applicantData.filter((data) => {return data.id === parseInt(this.props.selectedApplicant)})

        const currentApplicantsPostings = this.props.postingApplicantData.filter((postingApplicant) => {
            return (postingApplicant.applicantId === parseInt(this.props.selectedApplicant))
          })

        return (
            <div className="modal-overlay" data-modal-container-applicantcomponent>
                <div className="modal-container">
                    <div className="modal-header"><h2><strong>{currentApplicant[0].firstName} {currentApplicant[0].lastName}</strong></h2></div>
                    <div className="modal-body applicant-component-body">
                        <div className='applicant-component-left-side'>
                            <div className='applicant-component-section-title'>Personal Information</div>
                            <div className='applicant-component-information-container'>
                                <div className='applicant-component-information'>
                                    <div className="applicant-component-datafield"><strong>{currentApplicant[0].firstName} {currentApplicant[0].lastName}</strong></div>
                                    <div className="applicant-component-datafield">{currentApplicant[0].email}</div>
                                    <div className="applicant-component-datafield">{currentApplicant[0].phone}</div>
                                    <div className="applicant-component-datafield"><a href='{currentApplicant[0].linked_in}'>{currentApplicant[0].linked_in}</a></div>
                                    <div className="applicant-component-datafield">{currentApplicant[0].recruiter_notes}</div>
                                </div>
                            </div>
                            <div>
                                <div className='applicant-component-section-title'>Relevant Postings</div>
                                <PostingsApplied postingRecords={this.props.postingData} currentApplicantsPostings={currentApplicantsPostings}/>
                            </div>
                        </div>
                        <div className='applicant-component-right-side'>
                            <div className='resume'></div>
                            {/* <img src="./resume-image.png" alt="basic resume"/> */}
                        </div>
                    
                    </div>
                    <div className="modal-footer">
                        <button id='applicantcomponent' onClick={this.closeModal}>Cancel</button>
                        {/* <button>Save & New</button> */}
                        {/* {<button type="submit" id='posting' onClick={this.props.onFormSubmission}>Save</button>} */}
                    </div>
                </div>
            </div>
        )
    }
}

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps({ postingData, applicantData, selectedApplicant, postingApplicantData }) {
    return {
        postingData,
        applicantData,
        selectedApplicant,
        postingApplicantData
    }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    return {
        updateSelectedApplicant: (event) => dispatch(updateSelectedApplicant(event))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ApplicantComponent);
// export default ApplicantComponent;