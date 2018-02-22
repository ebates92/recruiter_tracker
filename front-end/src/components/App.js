import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Modal from './Modal.js';
import Header from './Header.js';
import Container from './Container.js';
// import Targets from '../targetData.js';
import Contacts from '../contactData.js';
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
const url = 'http://localhost:3000/api';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetData: [],
      error: null,
      filteredList: [],
      formObject: {
        targetName: 'a',
        industry: '',
        annualRevenue: null,
        employees: null,
        location: '',
        dealLead: '',
        title: '',
        relatedContactName: '',
        relatedContactEmail: '',
        relatedContactTitle: '',
        relatedContactPhone: ''
      }
    }
    this._onChangeHandler = this._onChangeHandler.bind(this);
    this._onFormChangeHandler = this._onFormChangeHandler.bind(this);
    this._onFormSubmission = this._onFormSubmission.bind(this);
  }

  _onFormChangeHandler(event) {
    const input = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({
        formObject: {
          ...prevState.formObject,
          [input]: value
        }
    }))
  }

  _onFormSubmission(){
    const data = this.state.formObject;
    axios.post(`${url}/target`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  _onChangeHandler(searchTerm, callback) {
    const re = new RegExp('^' + searchTerm + '.*', 'gi');
    const companyContactArray = this.state.targetData.concat(Contacts);
    let filteredList = companyContactArray.filter(record => record.name.match(re));
    // Return first 5 results
    filteredList = filteredList.slice(0, 5);
    this.setState({
      filteredList
    })
    callback(filteredList);
  }

  componentDidMount() {
      axios.get(`${url}/targets`)
        .then(res => res.data)
        .then(
          (targetRecords) => {
            this.setState({
              targetData: targetRecords
            });
          },
          (error) => {
            this.setState({
              error
            })
          }
        )

        axios.get(`${url}/contacts`)
        .then(res => res.data)
        .then(
          (contactRecords) => {
            this.setState({
              contactData: contactRecords
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
          <Header records={this.state.targetData} contactRecords={Contacts} onChangeHandler={this._onChangeHandler} filteredList={this.state.filteredList}/>
          <Container records={this.state.targetData} />
      </div>
    );
  }
}

export default App;
