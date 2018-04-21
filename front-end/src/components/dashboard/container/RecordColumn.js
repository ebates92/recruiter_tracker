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
          <Records columnType = {'Sourcing'} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column>
        {/* Screening */}
        <Column columnType='Screening' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Screening'} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column >
        {/* Initial Interview */}
        <Column columnType='Initial Interview' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Initial Interview'} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column>
        {/* Final Interview */}
        <Column columnType='Final Interview' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Final Interview'} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column>
        {/* Verification */}
        <Column columnType='Verification' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Verification'} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column>
        {/* Offer */}
        <Column columnType='Offer' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Offer'} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column>
        {/* Complete */}
        <Column columnType='Complete' movedCardStageHandler={this.props.movedCardStageHandler}>
          <Records columnType = {'Complete'} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} />
        </Column>
      </React.Fragment>
    );
  }
}

export default RecordColumn;