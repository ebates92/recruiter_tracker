import React from 'react';


const Record = (props) => {
      

      const recordCardsComponents = () => {
        if (props.postingApplicantRecords.length > 0) {
          return (props.postingApplicantRecords.map((record) => {
            const applicantRecord = props.applicantRecords.filter((applicant) => applicant.id === record.applicantId);
            const positionRecord = props.postingRecords.filter((posting) => posting.id === record.postingId)
            const buttonStyle = {width: '100px', height: '50px', fontSize: '.9rem', padding: '.3rem', marginLeft: 'auto', marginRight: 'auto'};
      
          const card = applicantRecord.length > 0 ? (
            <div className="ui card" id="card" accessKey={applicantRecord[0].id} key={record.id} onClick={props.applicantSelectedHandler}>
              <h3>{applicantRecord[0].firstName}</h3>
              <div className="content" id="card-content">
                <h4><em><span> {positionRecord[0].positionTitle}</span></em></h4>
                {/* <h4><strong>Email</strong><span> {applicantRecord[0].email}</span></h4>
                <h4><strong>Phone:</strong><span> {applicantRecord[0].phone}</span></h4> */}
                {/* <h4><strong>Recruiter Notes:</strong><span> {applicantRecord[0].recruiter_notes}</span></h4> */}
                {/* <h4><strong><a href={applicantRecord[0].resume_link}>Resume</a></strong></h4> */}
                <div className='align-schedule-button'>
                  <button class="ui green basic button" id={applicantRecord[0].id} style={buttonStyle} onClick={this.unhide}>Schedule Meeting</button>
                </div>
              </div>
            </div>) : null;
            
            return card
            })
          )
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

export default Record;