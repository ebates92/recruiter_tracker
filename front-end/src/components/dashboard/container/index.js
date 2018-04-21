import React, { Component } from 'react';
import ProgressBarWrapper from './ProgressBarWrapper.js';
import RecordColumn from './RecordColumn.js';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

// DOESN'T NEED REDUX

// @DragDropContext(HTML5Backend)
class Container extends Component {
  render() {
    return (
      <div className="container">
        <ProgressBarWrapper />
        <div className="status-columns">
          <RecordColumn calendly_url={this.props.calendly_url} calendlyMeetingHandler={this.props.calendlyMeetingHandler} movedCardStageHandler={this.props.movedCardStageHandler} applicantPostingMovedHandler={this.props.applicantPostingMovedHandler} />
        </div>
      </div>
    ); 
  }
}

export default DragDropContext(HTML5Backend)(Container);