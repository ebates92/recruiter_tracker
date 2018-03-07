import React, { Component } from 'react';
import ProgressBarWrapper from './ProgressBarWrapper.js';
import RecordColumn from './RecordColumn.js';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

// @DragDropContext(HTML5Backend)
class Container extends Component {
  render() {
    return (
      <div className="container">
        <ProgressBarWrapper />
        <div className="status-columns">
          <RecordColumn movedCardStageHandler={this.props.movedCardStageHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} applicantSelectedHandler={this.props.applicantSelectedHandler} postingSelected={this.props.postingSelected} postingRecords={this.props.postingRecords} applicantRecords={this.props.applicantRecords} postingApplicantRecords={this.props.postingApplicantRecords} />
        </div>
      </div>
    ); 
  }
}

export default DragDropContext(HTML5Backend)(Container);