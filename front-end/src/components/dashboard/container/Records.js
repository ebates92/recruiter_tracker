import React, { Component } from 'react';
import Record from './Record';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react';

class Records extends Component {
// const Records = (props) => {

      recordCardsComponents = () => {
        if (this.props.postingApplicantRecords.length > 0) {
          return (this.props.postingApplicantRecords.map((record) => {
            const applicantRecord = this.props.applicantRecords.filter((applicant) => applicant.id === record.applicantId);
            const positionRecord = this.props.postingRecords.filter((posting) => posting.id === record.postingId)
            const buttonStyle = {width: '100px', height: '50px', fontSize: '.9rem', padding: '.3rem', marginLeft: 'auto', marginRight: 'auto'};
            
            return <Record calendly_url={this.props.calendly_url} userData={this.props.userData} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} record={record} applicantRecord={applicantRecord} positionRecord={positionRecord} buttonStyle={buttonStyle}/>
            }))
        } else {
          return null
        }
      }
      
    render () {
      const recordCards = recordCardsComponents()
      return (
        <React.Fragment>
          {recordCards}
        </React.Fragment>
      )
    }
}

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps(state) {
  return {

  }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
  return bindActionCreators({},dispatch)
}

// export default connect(mapStateToProps,mapDispatchToProps)(Records)
export default Records;