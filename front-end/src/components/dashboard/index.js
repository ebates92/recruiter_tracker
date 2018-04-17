import React, { Component } from 'react';
// import '../App.css';
import axios from 'axios';
import Header from './header';
import Container from './container';
import NewPosting from './modal/Add_posting.js';
import NewApplicant from './modal/Add_applicant.js';
import AddApplicantToPosting from './modal/Add_applicant_to_posting.js';
import ApplicantComponent from './modal/Applicant_Component';
import CalendlyModal from './modal/Calendly';
import ScheduleMeeting from './modal/Schedule';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ACTIONS IMPORTED
import { fetchpostings } from '../../actions/get_postings.js';
import { fetchapplicants } from '../../actions/get_applicants.js';
import { fetchPostingApplicants } from '../../actions/get_posting_applicants.js';
import { fetchuser } from '../../actions/get_user';
import updateSelectedApplicant from '../../actions/selected.js'

const url = 'http://localhost:3000';

const Nothing = () => <span></span>;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,

      // update applicant selected
      applicantComponent: ApplicantComponent,

      // FOR SCHEDULING MODAL
      scheduleMeeting: null,

      // pushing data to the database
      formObject: {
        // add applicant
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linked_in: '',
        resume_link: '',
        recruiter_notes: '',

        // add posting
        positionTitle: '',
        jobDescription: '',
        salaryRange: 0,
        qualifications: '',
        hiringManager: '',
        additionalNotes: '',
        isFilled: false,

        // add applicant to posting
        applicantId: '',
        postingId: '',
        applicantStage: 'Sourcing',
        isRejected: false,
        hiringManager_notes: '',

        // edit or add user data
        calendly_url: '',

        // moving the applicant records on the dashboard
        applicantPostingMoved: ''
      }
    }
  
    this._onFormChangeHandler = this._onFormChangeHandler.bind(this);
    this._onFormSubmission = this._onFormSubmission.bind(this);
    // this._postingSelectedHandler = this._postingSelectedHandler.bind(this);
  }


// FORM FUNCTIONS

  _onFormChangeHandler(event) {
    const input = event.target.name;
    let value = event.target.value;

    this.setState(prevState => ({
        formObject: {
          ...prevState.formObject,
          [input]: value
        }
    }))
  }

  _onFormSubmission(event){
    const data = this.state.formObject;
    const model = event.target.id
    this._closeModal(event)
    axios.post(`${url}/posting/${model}`, data)
    .then(response => response.data)
      .then(
        (res) => {
          // RESETS THE DASHBOARD WITH NEW DATA
          if(model === "posting") {
            this.setState({
              postingData: [
                ...this.state.postingData,
                res
              ],
            })
          }
          if(model === "applicant") {
            this.setState({
              applicantData: [
                ...this.state.applicantData,
                res
              ]
            })
          }
          if(model === "applicanttoposting") {
            this.setState({
              postingApplicantData: [
                ...this.state.postingApplicantData,
                res
              ],
              newPostingApplicantData: [
                ...this.state.postingApplicantData,
                res
              ]
            })
          }
          if(model === "user-calendly") {
            this.setState({
              userData: res
            })
          }
        },
        (error) => {
          this.setState({
            error
          })
        }
      )
    .catch(function (error) {
      console.log(error);
    })
  }


  _handlesAddApplicantToPosting = (type, key) => {
    if (type === 'applicant'){
      this.setState(prevState => ({
        formObject: {
          ...prevState.formObject,
          applicantId: key
        }
      }))
    }

    if(type === 'posting') {
      this.setState(prevState => ({
        formObject: {
          ...prevState.formObject,
          postingId: key
        }
      }))
    }
  }

  _resetState = () => {
    this.setState({
        formObject: {
          // add applicant
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          linked_in: '',
          resume_link: '',
          recruiter_notes: '',
    
          // add posting
          positionTitle: '',
          jobDescription: '',
          salaryRange: '',
          qualifications: '',
          hiringManager: '',
          additionalNotes: '',
          isFilled: false,
    
          // add applicant to posting
          applicantId: '',
          postingId: '',
          applicantStage: 'Sourcing',
          isRejected: false,
          hiringManager_notes: '',

          // edit or add user data
          calendly_url: ''
      }
    })
  }


  // CLOSING MODALS

  _closeModal = (event) => {
    const id = event.target.id
    document.querySelector('body').setAttribute('style', 'position: ');
    document.querySelector(`[data-modal-container-${id}]`).classList.add('hide');
    this._resetState()
}

_closeModalCorrectly = (event) => {
  this.props.updateSelectedApplicant({
    target: {id:'SELECTED_applicant'},
    currentTarget: {accessKey: null}
  })
  this.setState({
    calendlyModal: null,
    scheduleMeeting: null,
  })
}


  // SETTINGS MODALS

  _calendly_urlClickHandler = (event) => {
    this.setState({
        calendlyModal: CalendlyModal
    })
}

// CALENDLY SCHEDULE MEETING

_calendlyMeetingHandler = () => {
  this.setState({
    scheduleMeeting: ScheduleMeeting
  })
}

// MOVING THE DASHBOARD RECORDS TO DIFFERENT COLUMNS

_applicantPostingMovedHandler = (id) => {
  this.setState(prevState => ({
    formObject: {
      applicantPostingMoved: id
    }
  }))
}

_movedCardStageHandler = (stage) => {
  const data = {
    postingApplicantId: this.state.formObject.applicantPostingMoved,
    stage: stage
  };
  axios.post(`${url}/posting/moved-card`, data)
  .then(response => response.data)
    .then(
      (res) => {
        // RESETS THE DASHBOARD WITH NEW DATA
          this.setState({
            postingApplicantData: res,
            newPostingApplicantData: res
          })
    })
}


// API CALLS
  componentDidMount() {
        this.props.fetchpostings()
        this.props.fetchapplicants()
        this.props.fetchPostingApplicants()
        this.props.fetchuser()
    }



  render() {
    console.log('rerender main dashboard', this.props.selectedApplicant)
    const ApplicantComponent = (this.props.selectedApplicant != null) ? this.state.applicantComponent : Nothing;
    console.log('should display', ApplicantComponent)
    const CalendlyModal = this.state.calendlyModal || Nothing;
    const ScheduleMeeting = this.state.scheduleMeeting || Nothing;

    return (
      <div className="App">
          <NewApplicant 
            formObject={this.state.formObject}
            closeModal={this._closeModal}
            onFormChangeHandler={this._onFormChangeHandler}
            onFormSubmission={this._onFormSubmission} />

          <NewPosting formObject={this.state.formObject}
            closeModal={this._closeModal}
            onFormChangeHandler={this._onFormChangeHandler}
            onFormSubmission={this._onFormSubmission} />

          <AddApplicantToPosting
            handlesAddApplicantToPosting={this._handlesAddApplicantToPosting}
            formObject={this.state.formObject}
            closeModal={this._closeModal}
            onFormChangeHandler={this._onFormChangeHandler}
            onFormSubmission={this._onFormSubmission} />

          <ApplicantComponent
            currentApplicantsPostings={this.state.currentApplicantsPostings}
            currentApplicant={this.state.currentApplicant}
            closeModalCorrectly={this._closeModalCorrectly}/>

          <CalendlyModal
            onFormChangeHandler={this._onFormChangeHandler}
            onFormSubmission={this._onFormSubmission}
            calendly_url={this.state.formObject.calendly_url}
            closeModalCorrectly={this._closeModalCorrectly}/>

          {/* <ScheduleMeeting calendlyLink={this.state.calendly_url} closeModalCorrectly={this._closeModalCorrectly} /> */}

          <Header 
            calendly_urlClickHandler={this._calendly_urlClickHandler}
            engagingTheModal={this._engagingTheModal}
            postingSelectedHandler={this._postingSelectedHandler}
            applicantSelectedHandler={this._applicantSelectedHandler}
            postingSelected={this.state.postingSelected} />

          <Container
            calendly_url={this.state.calendly_url}
            calendlyMeetingHandler={this._calendlyMeetingHandler}
            movedCardStageHandler={this._movedCardStageHandler}
            applicantPostingMovedHandler={this._applicantPostingMovedHandler}
            applicantSelectedHandler={this._applicantSelectedHandler}
            postingSelected={this.state.postingSelected} />
            
      </div>
    );
  }
}

let mapStateToProps = ({ applicantData, postingData, postingApplicantData, selectedApplicant }) => {
  return {
    applicantData, 
    postingData, 
    postingApplicantData,
    selectedApplicant
  }
}

let mapDispatchToProps = (dispatch) => {
  // return {actions: bindActionCreators({ fetchpostings }, dispatch)}
  return {
    fetchpostings: () => dispatch(fetchpostings()),
    fetchapplicants: () => dispatch(fetchapplicants()),
    fetchPostingApplicants: () => dispatch(fetchPostingApplicants()),
    fetchuser: () => dispatch(fetchuser()),
    updateSelectedApplicant: () => dispatch(updateSelectedApplicant())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
