import React, { Component } from 'react';
import PostingsApplied from './Postings_applied'
// import ModalTypes from './Modal-types.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateSelectedApplicantPosting from '../../../actions/selected.js'

 class ApplicantComponent extends Component {

    //  allows the ability to set redux state for selected applicant posting back to original state
    closeModal = () => {
        this.props.updateSelectedApplicantPosting({
            target: {id:'applicant_posting'},
            currentTarget: {accessKey: null}
          })
    }


    render() {
        const currentApplicantPosting = this.props.postingApplicantData.filter((postingApplicant) => {
            return (postingApplicant.id === parseInt(this.props.selectedApplicantPosting))
          })

        const currentApplicant = this.props.applicantData.filter((data) => {return data.id === parseInt(currentApplicantPosting[0].applicantId)})
        const currentPosting = this.props.postingData.filter((data) => { return data.id === parseInt(currentApplicantPosting[0].postingId)})



        return (
            <div className="modal-overlay" data-modal-container-applicantcomponent>
                <div className="modal-container">
                    <div className="modal-header"><h2><strong>{currentPosting[0].positionTitle} - {currentApplicant[0].firstName} {currentApplicant[0].lastName}</strong></h2></div>
                    <div className="modal-body applicant-posting-component-body">
                        <div>
                            <div className="applicant-component-datafield">{currentApplicant[0].email}</div>
                            <div className="applicant-component-datafield">{currentApplicant[0].phone}</div>
                            <div className="applicant-component-datafield"><a href='{currentApplicant[0].linked_in}'>{currentApplicant[0].linked_in}</a></div>
                        </div>
                        <div className='rating-boxes'>
                            <div>
                                <div className='applicant-component-section-title'>Recruiter Rating:</div>
                                <div className='applicant-component-information-container'>
                                    <div className='applicant-component-information'>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='applicant-component-section-title'>Manager Rating:</div>
                                <div className='applicant-component-information-container'>
                                    <div className='applicant-component-information'>
                                    </div>
                                </div>
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
function mapStateToProps({ postingData, applicantData, postingApplicantData, selectedApplicantPosting }) {
    return {
        postingData,
        applicantData,
        postingApplicantData,
        selectedApplicantPosting
    }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    return {
        updateSelectedApplicantPosting: (event) => dispatch(updateSelectedApplicantPosting(event))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ApplicantComponent);
// export default ApplicantComponent;