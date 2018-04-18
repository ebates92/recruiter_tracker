import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

// LIKELY WILL STILL NEED TO PASS STATE TO RECORDS AS REACT DND MODIFIES REACT COMPONENT ALREADY

// REACT DND FUNCTIONS
const recordSource = {
  beginDrag(props) {
    props.applicantPostingMovedHandler(props.record.id)
    return {}
  },
}

// REACT DND FUNCTIONS
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
    const calendlyLink = `${this.props.calendly_url}?name=${this.props.applicantRecord[0].firstName}`
    const emailData = `mailto:${this.props.applicantRecord[0].email}?subject=Interview for ${this.props.positionRecord[0].positionTitle} role&body=Hi ${this.props.applicantRecord[0].firstName},%0D%0A %0D%0A To schedule a meeting with me for the ${this.props.positionRecord[0].positionTitle} role, please paste this link into your web browser. %0D%0A %0D%0A ${calendlyLink} %0D%0A %0D%0A Thanks! %0D%0A ${this.props.userData.firstName} `

    const card = this.props.applicantRecord.length > 0 ? (
      <div className="ui card" id="card" accessKey={this.props.applicantRecord[0].id} key={this.props.record.id} onClick={this.props.selectedTarget}>
        <h3 id='applicant'>{this.props.applicantRecord[0].firstName}</h3>
        <div className="content" id="card-content">
          <h4><em><span> {this.props.positionRecord[0].positionTitle}</span></em></h4>
          <div className='align-schedule-button'>
            <a href={emailData}><button class="ui green basic button" id={this.props.applicantRecord[0].id} style={this.props.buttonStyle}>Schedule Meeting</button></a>
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