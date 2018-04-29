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

        // STYLING
        const headerMargin = {
            marginBottom: '.7rem'
        }

        // FUNCTIONS
        const currentApplicantPosting = this.props.postingApplicantData.filter((postingApplicant) => {
            return (postingApplicant.id === parseInt(this.props.selectedApplicantPosting))
          })
        const currentApplicant = this.props.applicantData.filter((data) => {return data.id === parseInt(currentApplicantPosting[0].applicantId)})
        const currentPosting = this.props.postingData.filter((data) => { return data.id === parseInt(currentApplicantPosting[0].postingId)})

        const recruiterRating = 4.5
        const managerRating = 4
        const avgRating = Math.round(((recruiterRating + managerRating)/2)*100)/100


        return (
            <div className="modal-overlay" data-modal-container-applicantcomponent>
                <div className="modal-container">
                    <div className="modal-header"><h2 style={headerMargin}><strong>{currentPosting[0].positionTitle} - {currentApplicant[0].firstName} {currentApplicant[0].lastName}</strong></h2>
                        <div className="personal-data">
                            <div className="applicant-component-datafield applicant-component-datafield-two">{currentApplicant[0].email}</div>
                            <div className="applicant-component-datafield applicant-component-datafield-two">-</div>
                            <div className="applicant-component-datafield applicant-component-datafield-two">{currentApplicant[0].phone}</div>
                            <div className="applicant-component-datafield applicant-component-datafield-two">-</div>
                            <div className="applicant-component-datafield applicant-component-datafield-two"><a href='{currentApplicant[0].linked_in}'>{currentApplicant[0].linked_in}</a></div>
                        </div>
                    </div>
                    <div className="modal-body applicant-posting-component-body">
                        <div className='competency-scores'>
                            <div className="recruit-rating">Rating:  {recruiterRating}</div>
                            <i className="arrowone-rating" class="fas fa-angle-double-right"></i>
                            <div className="avg-rating"><strong>{avgRating}</strong></div>
                            <i className="arrowtwo-rating" class="fas fa-angle-double-left"></i>
                            <div className="manager-rating">Rating:  {managerRating}</div>
                        </div>
                        <div className='rating-boxes'>
                            <div className='applicant-posting-component-information-container'>
                                <div className='competency-rating-title'>Recruiter</div>
                                    <div>
                                        <div className='competency-container'>
                                            <div className="competency-name">Creative</div>
                                            <div className='stars'>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                            </div>
                                        </div>
                                        <div className='competency-container'>
                                            <div className='competency-name'>Strategic</div>
                                            <div className='stars'>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                            </div>
                                        </div>
                                        <div className='competency-container'>
                                            <div className='competency-name'>Innovative</div>
                                            <div className='stars'>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                            </div>
                                        </div>
                                        <div className='competency-container'>
                                            <div className='competency-name'>Good Communicator</div>
                                            <div className='stars'>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className='applicant-posting-component-information-container'>
                                <div className='competency-rating-title'>Manager</div>
                                <div className='applicant-component-information'>
                                <div>
                                        <div className='competency-container'>
                                            <div className="competency-name">Creative</div>
                                            <div className='stars'>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                            </div>
                                        </div>
                                        <div className='competency-container'>
                                            <div className='competency-name'>Strategic</div>
                                            <div className='stars'>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                            </div>
                                        </div>
                                        <div className='competency-container'>
                                            <div className='competency-name'>Innovative</div>
                                            <div className='stars'>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                            </div>
                                        </div>
                                        <div className='competency-container'>
                                            <div className='competency-name'>Good Communicator</div>
                                            <div className='stars'>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div className='star'>★</div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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