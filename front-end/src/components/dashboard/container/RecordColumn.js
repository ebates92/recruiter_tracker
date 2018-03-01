import React, { Component } from 'react';
import Record from './Record.js';

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
      <div className="status-col">
      <Record postingSelected={this.props.postingSelected} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Sourcing')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
      </div>
      {/* Screening */}
      <div className="status-col">
      <Record postingSelected={this.props.postingSelected} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Screening')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
      </div>
      {/* Initial Interview */}
      <div className="status-col">
      <Record postingSelected={this.props.postingSelected} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Initial Interview')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
      </div>
      {/* Final Interview */}
      <div className="status-col">
      <Record postingSelected={this.props.postingSelected} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Final Interview')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
      </div>
      {/* Verification */}
      <div className="status-col">
      <Record postingSelected={this.props.postingSelected} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Verification')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
      </div>
      {/* Offer */}
      <div className="status-col">
      <Record postingSelected={this.props.postingSelected} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Offer')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
      </div>
      {/* Complete */}
      <div className="status-col">
      <Record postingSelected={this.props.postingSelected} postingApplicantRecords={this.props.postingApplicantRecords.filter((record) => record.applicantStage === 'Complete')} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} />
      </div>
      </React.Fragment>
    );
  }
}

export default RecordColumn;