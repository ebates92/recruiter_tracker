import React from 'react';
import { DragSource } from 'react-dnd';
import Record from './Record'
  
// const recordSource = {
//   beginDrag(props) {
//     console.log(props)
//   },
// }

// function collect(connect, monitor) {
// 	return {
// 		connectDragSource: connect.dragSource(),
// 		connectDragPreview: connect.dragPreview(),
// 		isDragging: monitor.isDragging(),
// 	}
// }

const Records = (props) => {

      const recordCardsComponents = () => {
        if (props.postingApplicantRecords.length > 0) {
          return (props.postingApplicantRecords.map((record) => {
            const applicantRecord = props.applicantRecords.filter((applicant) => applicant.id === record.applicantId);
            const positionRecord = props.postingRecords.filter((posting) => posting.id === record.postingId)
            const buttonStyle = {width: '100px', height: '50px', fontSize: '.9rem', padding: '.3rem', marginLeft: 'auto', marginRight: 'auto'};
            
            return <Record calendly_url={props.calendly_url} userData={props.userData} calendlyMeetingHandler={props.calendlyMeetingHandler} applicantPostingMovedHandler={props.applicantPostingMovedHandler} applicantSelectedHandler={props.applicantSelectedHandler} record={record} applicantRecord={applicantRecord} positionRecord={positionRecord} buttonStyle={buttonStyle}/>
            }))
        } else {
          return null
        }
      }
      
    const recordCards = recordCardsComponents()

    return (
      <React.Fragment>
        {recordCards}
      </React.Fragment>
    )
}

export default Records;