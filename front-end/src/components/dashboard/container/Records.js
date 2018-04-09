import React, { Component } from 'react';
import Record from './Record';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react';
import rootReducer from '../../../reducers'

class Records extends Component {
  constructor(props) {
    super(props);
  }

  // Passed in the column type and needed to filter out the records that weren't relevant.  All of the [0] are because redux for some reason
  // is putting the array inside the first [0] index tag.
      recordCardsComponents = () => {
        // to make sure that the axios promise completed
        const postingApplicantDataFiltered = (this.props.postingApplicantData != null) ? this.props.postingApplicantData[0].filter((data) => data.applicantStage === this.props.columnType) : null
        // to make sure that the axios promise completed and that there are actual records in these columns
        if ((postingApplicantDataFiltered != null) && (this.props.applicantData != null) && (this.props.postingData != null) && (this.props.userData != null)) {
          return (postingApplicantDataFiltered.map((record) => {
            const applicantRecord = this.props.applicantData[0].filter((applicant) => applicant.id === record.applicantId);
            const positionRecord = this.props.postingData[0].filter((posting) => posting.id === record.postingId)
            const buttonStyle = {width: '100px', height: '50px', fontSize: '.9rem', padding: '.3rem', marginLeft: 'auto', marginRight: 'auto'};

            return <Record
                      calendly_url={this.props.calendly_url}
                      userData={this.props.userData[0]} 
                      calendlyMeetingHandler={this.props.calendlyMeetingHandler} 
                      applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} 
                      applicantSelectedHandler={this.props.applicantSelectedHandler} 
                      record={record} applicantRecord={applicantRecord} 
                      positionRecord={positionRecord} 
                      buttonStyle={buttonStyle} />
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
function mapStateToProps({ postingData, applicantData, postingApplicantData, userData }) {
  return {
    postingData,
    applicantData,
    postingApplicantData,
    userData
  }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
  // return bindActionCreators({},dispatch)
  return null
}

export default connect(mapStateToProps,mapDispatchToProps)(Records)
// export default Records;