import React from 'react';
import Record from './Record.js';

// class RecordColumn extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         records: props.records
//       }
//     }
  
//     render() {
//       return (
//         <React.Fragment>
//         {/* Prospecting */}
//         <div className="status-col">
//         <Record records={this.state.records.filter((record) => record.stage === 'Prospecting')} />
//         </div>
//         {/* Researching */}
//         <div className="status-col">
//         <Record records={this.state.records.filter((record) => record.stage === 'Researching')} />
//         </div>
//         {/* Pending Approval */}
//         <div className="status-col">
//         <Record records={this.state.records.filter((record) => record.stage === 'Pending Approval')} />
//         </div>
//         {/* Approved */}
//         <div className="status-col">
//         <Record records={this.state.records.filter((record) => record.stage === 'Approved')} />
//         </div>
//         </React.Fragment>
//       );
//     }
//   }

const RecordColumn = (props) => {
  console.log('recordcolumn')
  console.log(props)
  return (
    <React.Fragment>
    {/* Sourcing */}
    <div className="status-col">
    <Record postingApplicantRecords={props.postingApplicantRecords.filter((record) => record.applicantStage === 'Sourcing')} postingRecords={props.postingRecords} applicantRecords={props.applicantRecords} />
    </div>
    {/* Screening */}
    <div className="status-col">
    <Record postingApplicantRecords={props.postingApplicantRecords.filter((record) => record.applicantStage === 'Screening')} postingRecords={props.postingRecords} applicantRecords={props.applicantRecords} />
    </div>
    {/* Initial Interview */}
    <div className="status-col">
    <Record postingApplicantRecords={props.postingApplicantRecords.filter((record) => record.applicantStage === 'Initial Interview')} postingRecords={props.postingRecords} applicantRecords={props.applicantRecords} />
    </div>
    {/* Final Interview */}
    <div className="status-col">
    <Record postingApplicantRecords={props.postingApplicantRecords.filter((record) => record.applicantStage === 'Final Interview')} postingRecords={props.postingRecords} applicantRecords={props.applicantRecords} />
    </div>
    {/* Verification */}
    <div className="status-col">
    <Record postingApplicantRecords={props.postingApplicantRecords.filter((record) => record.applicantStage === 'Verification')} postingRecords={props.postingRecords} applicantRecords={props.applicantRecords} />
    </div>
    {/* Offer */}
    <div className="status-col">
    <Record postingApplicantRecords={props.postingApplicantRecords.filter((record) => record.applicantStage === 'Offer')} postingRecords={props.postingRecords} applicantRecords={props.applicantRecords} />
    </div>
    {/* Complete */}
    <div className="status-col">
    <Record postingApplicantRecords={props.postingApplicantRecords.filter((record) => record.applicantStage === 'Complete')} postingRecords={props.postingRecords} applicantRecords={props.applicantRecords} />
    </div>
    </React.Fragment>
  );
}

export default RecordColumn;