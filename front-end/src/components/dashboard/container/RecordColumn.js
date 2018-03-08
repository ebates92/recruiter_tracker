import React, { Component } from 'react';
import Records from './Records.js';
import Column from './Column.js';

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
          <Records userData={this.props.userData} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Sourcing')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
        </Column>
        {/* Screening */}
        <Column columnType='Screening' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records userData={this.props.userData} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Screening')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
        </Column >
        {/* Initial Interview */}
        <Column columnType='Initial Interview' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records userData={this.props.userData} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Initial Interview')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
        </Column>
        {/* Final Interview */}
        <Column columnType='Final Interview' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records userData={this.props.userData} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Final Interview')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
        </Column>
        {/* Verification */}
        <Column columnType='Verification' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records userData={this.props.userData} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Verification')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
        </Column>
        {/* Offer */}
        <Column columnType='Offer' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records userData={this.props.userData} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Offer')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
        </Column>
        {/* Complete */}
        <Column columnType='Complete' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records userData={this.props.userData} calendlyMeetingHandler={this.props.calendlyMeetingHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Complete')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
        </Column>
      </React.Fragment>
    );
  }
}

export default RecordColumn;