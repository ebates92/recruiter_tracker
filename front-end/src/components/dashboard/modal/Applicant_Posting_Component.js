import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateSelectedApplicantPosting from '../../../actions/selected.js'
import Competency_stars from './Competency_rating_stars.js'
import { fetchPostingApplicants } from '../../../actions/get_posting_applicants.js'

const url = 'http://localhost:3000';

 class ApplicantComponent extends Component {
     constructor(props){
         super(props);
        //  redux is providing this filtered data
         this.state = {
             managerRating: this.props.selectedApplicantPosting.applicantPostingData.managerRating,
             recruiterRating: this.props.selectedApplicantPosting.applicantPostingData.recruiterRating,
             selectedApplicantPosting: this.props.selectedApplicantPosting.id
         }
     }

    
    _testStrings = () => {
        const managerRating = this.state.managerRating;
        const recruiterRating = this.state.recruiterRating;
                
        const fixStrings = (string) => {
            const ratingRemoveBrackets = string.substring(1, string.length - 1)
            const ratingSplit = ratingRemoveBrackets.split(',')
            const ratingParsed = ratingSplit.map((each) => parseInt(each))
            return ratingParsed;
         }
        
         if (typeof managerRating === 'string') {
             const fixedString = fixStrings(managerRating)
             this.setState({
                 managerRating: fixedString
             })
         } 

        if (typeof recruiterRating === 'string') {
            const fixedString = fixStrings(recruiterRating)
            this.setState({
                recruiterRating: fixedString
            })
        }
    }

    // fix the stupid string array that comes from postgres into a useable array
    componentWillMount() {
        this._testStrings()
    }

     _onFormSubmission = () => {
         const data = {
             managerRating: this.state.managerRating,
             recruiterRating: this.state.recruiterRating,
             selectedApplicantPosting: this.state.selectedApplicantPosting
         }
         axios.post(`${url}/posting/competencyratings`, data)
            .then(response => response.data)
            .then((res) => {
                this.props.fetchPostingApplicants();
            })
        this.closeModal()
     }

    //  allows the ability to set redux state for selected applicant posting back to original state
    closeModal = () => {
        this.props.updateSelectedApplicantPosting({
            target: {id:'applicant_posting'},
            currentTarget: {accessKey: null}
          })
    }

    // updates star clicked state
    _starClick = (event) => {
        const rating = parseInt(event.currentTarget.accessKey)
        const competencyIndex = event.currentTarget.id

       if (event.currentTarget.classList.value === 'recruiter') {
            const newRating = this.state.recruiterRating.slice()
            newRating[competencyIndex] = rating
            this.setState({
                recruiterRating: newRating
            })
       } else {
            const newRating = this.state.managerRating.slice()
            newRating[competencyIndex] = rating
            this.setState({
                managerRating: newRating
            })
       }
    }


    render() {

        // STYLING
        const headerMargin = {
            marginBottom: '.7rem'
        }

        // calculates the values for average rating to be displayed

        const recruiterCount = this.state.recruiterRating.filter((rating) => rating != 0)
        const managerCount = this.state.managerRating.filter((rating) => rating != 0)
        const recruiterRating = Math.round((this.state.recruiterRating.reduce((total, currentValue) => total + currentValue)/recruiterCount.length || 0)*100)/100
        const managerRating = Math.round((this.state.managerRating.reduce((total, currentValue) => total + currentValue)/managerCount.length || 0)*100)/100
        const avgRatingFunction = () => {
            if(recruiterRating === 0) {
                return managerRating;
            } else if (managerRating === 0) {
                return recruiterRating
            } else {
                return Math.round(((recruiterRating + managerRating)/2)*100)/100
            }
        }
        const avgRating = avgRatingFunction()

        return (
            <div className="modal-overlay" data-modal-container-applicantcomponent>
                <div className="modal-container">
                    <div className="modal-header"><h2 style={headerMargin}><strong>{this.props.selectedApplicantPosting.postingData.positionTitle} - {this.props.selectedApplicantPosting.applicantData.firstName} {this.props.selectedApplicantPosting.applicantData.lastName}</strong></h2>
                        <div className="personal-data">
                            <div className="applicant-component-datafield applicant-component-datafield-two">{this.props.selectedApplicantPosting.applicantData.email}</div>
                            <div className="applicant-component-datafield applicant-component-datafield-two">-</div>
                            <div className="applicant-component-datafield applicant-component-datafield-two">{this.props.selectedApplicantPosting.applicantData.phone}</div>
                            <div className="applicant-component-datafield applicant-component-datafield-two">-</div>
                            <div className="applicant-component-datafield applicant-component-datafield-two"><a href='{this.props.selectedApplicantPosting.applicantData.linked_in}'>{this.props.selectedApplicantPosting.applicantData.linked_in}</a></div>
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
                                        <Competency_stars type="recruiter" starClick={this._starClick} competencies={this.props.selectedApplicantPosting.postingData.competencies} starRating={this.state.recruiterRating}/>
                                    </div>
                            </div>
                            <div className='applicant-posting-component-information-container'>
                                <div className='competency-rating-title'>Manager</div>
                                <div className='applicant-component-information'>
                                    <div>
                                        <Competency_stars type="manager" starClick={this._starClick} competencies={this.props.selectedApplicantPosting.postingData.competencies} starRating={this.state.managerRating}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="modal-footer">
                        <button id='applicantcomponent' onClick={this.closeModal}>Cancel</button>
                        <button type="submit" id='posting' onClick={this._onFormSubmission}>Save</button>
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
        updateSelectedApplicantPosting: (event) => dispatch(updateSelectedApplicantPosting(event)),
        fetchPostingApplicants: () => dispatch(fetchPostingApplicants())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ApplicantComponent);
// export default ApplicantComponent;