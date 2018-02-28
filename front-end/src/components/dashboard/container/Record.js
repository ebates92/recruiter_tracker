import React from 'react';

// class Record extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         records: props.records
//       }
//     }
  
//     render() {
//         const recordCards = this.state.records.map(record => 
//             (<a href="#" class="ui card" id="card">
//             <h3>{record.name}</h3>
//                 <div class="content" id="card-content">
//                 <h4><strong>Annual Revenue:</strong><span> {record.annualRevenue}</span></h4>
//                 <h4><strong>Location:</strong><span> Kentucky</span></h4>
//                 <h4><strong>Deal Lead:</strong><span> {record.dealLead}</span></h4>
//                 <h4><strong>Stage:</strong><span> {record.stage}</span></h4>
//                  </div>
//               </a>)
//         )
//       return (
//           <React.Fragment>
//           {recordCards}
//           </React.Fragment>
//       );
//     }
//   }


const Record = (props) => {

  const recordCards = 

      props.postingApplicantRecords.map((record) => {
        const applicantRecord = props.applicantRecords.filter((applicant) => applicant.id === record.applicantId);
        const positionRecord = props.postingRecords.filter((posting) => posting.id === record.postingId)

        const card = applicantRecord.length > 0 ? (
          <a href="/" className="ui card" id="card" key={record.id}>
            <h3>{applicantRecord[0].firstName}</h3>
            <div className="content" id="card-content">
              <h4><em>Position:<span> {positionRecord[0].positionTitle}</span></em></h4>
              {/* <h4><strong>Email</strong><span> {applicantRecord[0].email}</span></h4>
              <h4><strong>Phone:</strong><span> {applicantRecord[0].phone}</span></h4> */}
              <h4><strong>Recruiter Notes:</strong><span> {applicantRecord[0].recruiter_notes}</span></h4>
              {/* <h4><strong><a href={applicantRecord[0].resume_link}>Resume</a></strong></h4> */}

            </div>
          </a>) : null;
          
          return card
      })

    return (
      <React.Fragment>
        {recordCards}
      </React.Fragment>
    )
}

export default Record;