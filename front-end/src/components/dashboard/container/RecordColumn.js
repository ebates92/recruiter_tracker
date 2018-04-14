import React, { Component } from 'react';
import Records from './Records.js';
import Column from './Column.js';

// DOESN'T NEED REDUX STATE

class RecordColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // newPostingApplicantRecords: this.props.postingApplicantRecords,
    }
  }

  render () {

    return (
      <React.Fragment>
        {/* Sourcing */}
        <Column columnType='Sourcing' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Sourcing'} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column>
        {/* Screening */}
        <Column columnType='Screening' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Screening'} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column >
        {/* Initial Interview */}
        <Column columnType='Initial Interview' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Initial Interview'} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column>
        {/* Final Interview */}
        <Column columnType='Final Interview' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Final Interview'} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column>
        {/* Verification */}
        <Column columnType='Verification' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Verification'} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column>
        {/* Offer */}
        <Column columnType='Offer' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Offer'} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column>
        {/* Complete */}
        <Column columnType='Complete' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Complete'} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column>
      </React.Fragment>
    );
  }
}

export default RecordColumn;