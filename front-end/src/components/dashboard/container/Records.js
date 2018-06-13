import React, { Component } from 'react';
import Record from './Record';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react';
import rootReducer from '../../../reducers';
import selectedTarget from '../../../actions/selected.js';
import axios from 'axios';
import { url } from '../../../api_route';

import { fetchPostingApplicants } from '../../../actions/get_posting_applicants.js';

class Records extends Component {
  constructor(props) {
    super(props);
  }

  _cardClicked = (event) => {
    if (event.target.className === "remove-from-position") {
      this._removeApplicantFromPosition(event)
      return null
    } else if (event.target.className === "ui green basic button") {
      return null
    } else if (event.currentTarget.id === "card") {
      this.props.selectedTarget(event, this.props.postingData, this.props.applicantData,this.props.postingApplicantData)
      return null
    }
  }

  _removeApplicantFromPosition = (event) => {
    const data = {
      postingApplicantId: event.currentTarget.title,
      stage: "Not Qualified"
    };
    axios.post(`${url}/posting/moved-card`, data)
    .then(response => response.data)
      .then(
        (res) => {
          // RESETS THE DASHBOARD WITH NEW DATA
          this.props.fetchPostingApplicants()
      })
  }

  // Passed in the column type and needed to filter out the records that weren't relevant.  All of the [0] are because redux for some reason
  // is putting the array inside the first [0] index tag.
      recordCardsComponents = () => {
        // to make sure that the axios promise completed and to filter the records based on the position currently selected.
        let postingApplicantDataFunction = () => {
          if (this.props.postingApplicantData != null && this.props.selectedPosting != undefined) {
            if (this.props.selectedPosting === 'All') {
              return (this.props.postingApplicantData.filter((data) => data.applicantStage === this.props.columnType))
            } else {
              return (this.props.postingApplicantData.filter((data) => data.applicantStage === this.props.columnType)).filter((data) => data.postingId === parseInt(this.props.selectedPosting))
            }
          }
        }

        const postingApplicantDataFiltered = postingApplicantDataFunction()

        // to make sure that the axios promise completed and that there are actual records in these columns
        if ((postingApplicantDataFiltered != null) && (this.props.applicantData != null) && (this.props.postingData != null) && (this.props.userData != null)) {
          return (postingApplicantDataFiltered.map((record) => {
            const applicantRecord = this.props.applicantData.filter((applicant) => applicant.id === record.applicantId);
            const positionRecord = this.props.postingData.filter((posting) => posting.id === record.postingId)
            const buttonStyle = {width: '100px', height: '50px', fontSize: '.9rem', padding: '.3rem', marginLeft: 'auto', marginRight: 'auto'};

            return <Record
                      calendly_url={this.props.calendly_url}
                      userData={this.props.userData} 
                      applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} 
                      record={record}
                      applicantRecord={applicantRecord} 
                      positionRecord={positionRecord} 
                      buttonStyle={buttonStyle} 
                      cardClicked={this._cardClicked}
                      removeApplicantFromPosition={this.removeApplicantFromPosition} />
            }))
        } else {
          return null
        }
      }
      
    render () {
      const recordCards = this.recordCardsComponents()
      return (
        <React.Fragment>
          {recordCards}
        </React.Fragment>
      )
    }
}

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps({ postingData, applicantData, postingApplicantData, userData, selectedPosting }) {
  return {
    postingData,
    applicantData,
    postingApplicantData,
    userData,
    // provides the filter for reducing postingApplicantData when a filter is applied for viewing a certain position
    selectedPosting
  }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
  // return bindActionCreators({},dispatch)
  return {
    // handles which applicant was clicked
    selectedTarget: (a,b,c,d) => dispatch(selectedTarget(a,b,c,d)),
    // handles the update to the page when a record is removed
    fetchPostingApplicants: () => dispatch(fetchPostingApplicants())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Records)
// export default Records;