import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

  
const recordSource = {
  beginDrag() {
    return {}
  },
}

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging(),
	}
}

class Record extends Component {

  render() {
    const { connectDragSource, isDragging } = this.props;

    const card = this.props.applicantRecord.length > 0 ? (
      <div className="ui card" id="card" accessKey={this.props.applicantRecord[0].id} key={this.props.record.id} onClick={this.props.applicantSelectedHandler}>
        <h3>{this.props.applicantRecord[0].firstName}</h3>
        <div className="content" id="card-content">
          <h4><em><span> {this.props.positionRecord[0].positionTitle}</span></em></h4>
          <div className='align-schedule-button'>
            <button class="ui green basic button" id={this.props.applicantRecord[0].id} style={this.props.buttonStyle} onClick={this.props.unhide}>Schedule Meeting</button>
          </div>
        </div>
      </div>) : null;

    return connectDragSource(
      <div>
        {card}
      </div>
      )
  }
}


export default DragSource('record', recordSource, collect) (Record);