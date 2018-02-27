import React, { Component } from 'react';
// import '../App.css';
import axios from 'axios';
import Modal from './modal';
import Header from './header';
import Container from './container';
// import Postings from '../postingData.js';
// import Applicants from './applicantData.js';
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
const url = 'http://localhost:3000/api';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postingData: [],
      applicantData: [],
      postingApplicantData: [],
      newPostingApplicantData: [],
      postingSelected: 'All',
      error: null,
      filteredList: [],
      formObject: {
        postingName: 'a',
        industry: '',
        annualRevenue: null,
        employees: null,
        location: '',
        dealLead: '',
        title: '',
        relatedApplicantName: '',
        relatedApplicantEmail: '',
        relatedApplicantTitle: '',
        relatedApplicantPhone: ''
      }
    }
    this._onChangeHandler = this._onChangeHandler.bind(this);
    this._onFormChangeHandler = this._onFormChangeHandler.bind(this);
    this._onFormSubmission = this._onFormSubmission.bind(this);
    this._postingSelectedHandler = this._postingSelectedHandler.bind(this);
  }

  _onFormChangeHandler(event) {
    const input = event.posting.name;
    const value = event.posting.value;
    this.setState(prevState => ({
        formObject: {
          ...prevState.formObject,
          [input]: value
        }
    }))
  }

  _onFormSubmission(){
    const data = this.state.formObject;
    axios.post(`${url}/posting`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  _onChangeHandler(searchTerm, callback) {
    const re = new RegExp('^' + searchTerm + '.*', 'gi');
    const companyApplicantArray = this.state.postingData.concat(this.state.applicantData);
    let filteredList = companyApplicantArray.filter(record => record.name.match(re));
    // Return first 5 results
    filteredList = filteredList.slice(0, 5);
    this.setState({
      filteredList
    })
    callback(filteredList);
  }


  // NEED TO TALK TO CHRIS ON HOW TO FIX THE .FILTER IS NOT A FUNCTION
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
  

  componentDidMount() {
    console.log('api request occurring')
      axios.get(`${url}/postings`)
        .then(res => res.data)
        .then(
          (postingRecords) => {
            this.setState({
              postingData: postingRecords
            });
          },
          (error) => {
            this.setState({
              error
            })
          }
        )

        axios.get(`${url}/applicants`)
        .then(res => res.data)
        .then(
          (applicantRecords) => {
            this.setState({
              applicantData: applicantRecords
            });
          },
          (error) => {
            this.setState({
              error
            })
          }
        )


        axios.get(`${url}/postingApplicant`)
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
    return (
      <div className="App">
          <Modal onFormChangeHandler={this._onFormChangeHandler} onFormSubmission={this._onFormSubmission} />
          <Header postingSelectedHandler={this._postingSelectedHandler} postingRecords={this.state.postingData}  onChangeHandler={this._onChangeHandler} postingSelected={this.state.postingSelected} filteredList={this.state.filteredList}/>
          <Container postingSelected={this.state.postingSelected} postingRecords={this.state.postingData} applicantRecords={this.state.applicantData} postingApplicantRecords={this.state.newPostingApplicantData} />
      </div>
    );
  }
}

export default Dashboard;
