import React, { Component } from 'react';
// import '../App.css';
import axios from 'axios';
import Header from './header';
import Container from './container';
import NewPosting from './modal/Add_posting.js'
import NewApplicant from './modal/Add_applicant.js'
import AddApplicantToPosting from './modal/Add_applicant_to_posting.js'
import ApplicantComponent from './modal/Applicant_Component'
// import Postings from '../postingData.js';
// import Applicants from './applicantData.js';
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
const url = 'http://localhost:3000';

const Nothing = () => <span></span>;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postingData: [],
      applicantData: [],
      postingApplicantData: [],
      error: null,
      filteredList: [],

      // update applicant selected
      currentApplicant: '',
      currentApplicantsPostings: '',
      applicantComponent: null,

      // updating the posting dropdown and container
      newPostingApplicantData: [],
      postingSelected: 'All',

      // update and interact with the modal (when we refactor this code)
      // modalType: 'New Posting',
      // modalToDeploy: '',

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

      }
    }
  
    this._onFormChangeHandler = this._onFormChangeHandler.bind(this);
    this._onFormSubmission = this._onFormSubmission.bind(this);
    this._postingSelectedHandler = this._postingSelectedHandler.bind(this);
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

  _closeModal = (event) => {
    const id = event.target.id
    document.querySelector('body').setAttribute('style', 'position: ');
    document.querySelector(`[data-modal-container-${id}]`).classList.add('hide');
    this._resetState()
}

_closeModalCorrectly = (event) => {
  this.setState({
    currentApplicant: '',
    applicantComponent: null,
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
      }
    })
  }
    

// SEARCH BAR

  _applicantSelectedHandler = (event) => {
    const applicant = this.state.applicantData.filter((applicant) => {
      return (applicant.id === parseInt(event.currentTarget.accessKey))
    })

    const currentApplicantsPostings = this.state.postingApplicantData.filter((postingApplicant) => {
      return (postingApplicant.applicantId === parseInt(event.currentTarget.accessKey))
    })

    this.setState({
      currentApplicant: applicant,
      applicantComponent: ApplicantComponent,
      currentApplicantsPostings
    })
  }


// FOR UPDATING POSTING SELECTIONS ON THE MAIN DASHBOARD CONTAINER

  _postingSelectedHandler(event) {

    // figures out the posting that was filtered by
    const newPostingData = this.state.postingData.filter((record) => record.positionTitle === event.target.innerHTML)
    // modifies the posting applicant data that should be shared back to the container
    const newPostingApplicantDataFunction = () => {
      if (event.target.innerHTML === "All") {
          return this.state.postingApplicantData
      } else {
        return this.state.postingApplicantData.filter((postingApplicantRecord) => postingApplicantRecord.postingId === newPostingData[0].id)
      } 
    }

    const newPostingApplicantData = newPostingApplicantDataFunction();

    this.setState({
      postingSelected: event.target.innerHTML,
      newPostingApplicantData: newPostingApplicantData,
    })
  };

// API CALLS
  componentDidMount() {
    console.log('api request occurring')
      axios.get(`${url}/api/postings`)
        .then(res => res.data)
        .then(
          (postingRecords) => {
            this.setState({
              postingData: postingRecords,
              postingOptions: postingRecords
            });
          },
          (error) => {
            this.setState({
              error
            })
          }
        )

        axios.get(`${url}/api/applicants`)
        .then(res => res.data)
        .then(
          (applicantRecords) => {
            this.setState({
              applicantData: applicantRecords,
              applicantOptions: applicantRecords
            });
          },
          (error) => {
            this.setState({
              error
            })
          }
        )


        axios.get(`${url}/api/postingApplicant`)
        .then(res => res.data)
        .then(
          (postingApplicants) => {
            console.log(postingApplicants)
            this.setState({
              postingApplicantData: postingApplicants,
              newPostingApplicantData: postingApplicants
            });
          },
          (error) => {
            this.setState({
              error
            })
          }
        )
    }

  render() {
    const ApplicantComponent = this.state.applicantComponent || Nothing;

    return (
      <div className="App">
          <NewApplicant formObject={this.state.formObject} closeModal={this._closeModal} onFormChangeHandler={this._onFormChangeHandler} onFormSubmission={this._onFormSubmission} />
          <NewPosting formObject={this.state.formObject} closeModal={this._closeModal} onFormChangeHandler={this._onFormChangeHandler} onFormSubmission={this._onFormSubmission} />
          <AddApplicantToPosting handlesAddApplicantToPosting={this._handlesAddApplicantToPosting} postingRecords={this.state.postingData} applicantRecords={this.state.applicantData} formObject={this.state.formObject} closeModal={this._closeModal} onFormChangeHandler={this._onFormChangeHandler} onFormSubmission={this._onFormSubmission} />
          <ApplicantComponent postingRecords={this.state.postingData} currentApplicantsPostings={this.state.currentApplicantsPostings} currentApplicant={this.state.currentApplicant} closeModalCorrectly={this._closeModalCorrectly}/>
          <Header engagingTheModal={this._engagingTheModal} postingSelectedHandler={this._postingSelectedHandler} applicantSelectedHandler={this._applicantSelectedHandler} applicantRecords={this.state.applicantData} postingRecords={this.state.postingData} postingSelected={this.state.postingSelected} />
          <Container applicantSelectedHandler={this._applicantSelectedHandler} postingSelected={this.state.postingSelected} postingRecords={this.state.postingData} applicantRecords={this.state.applicantData} postingApplicantRecords={this.state.newPostingApplicantData} />
      </div>
    );
  }
}

export default Dashboard;
