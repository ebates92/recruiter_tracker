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
  return (
    <React.Fragment>
    {/* Sourcing */}
    <div className="status-col">
    <Record records={props.records.filter((record) => record.stage === 'Sourcing')} />
    </div>
    {/* Screening */}
    <div className="status-col">
    <Record records={props.records.filter((record) => record.stage === 'Screening')} />
    </div>
    {/* Initial Interview */}
    <div className="status-col">
    <Record records={props.records.filter((record) => record.stage === 'Initial Interview')} />
    </div>
    {/* Final Interview */}
    <div className="status-col">
    <Record records={props.records.filter((record) => record.stage === 'Final Interview')} />
    </div>
    {/* Background Check */}
    <div className="status-col">
    <Record records={props.records.filter((record) => record.stage === 'Background Check')} />
    </div>
    {/* Offer */}
    <div className="status-col">
    <Record records={props.records.filter((record) => record.stage === 'Offer')} />
    </div>
    {/* To Be Onboarded */}
    <div className="status-col">
    <Record records={props.records.filter((record) => record.stage === 'To Be Onboarded')} />
    </div>
    </React.Fragment>
  );
}

export default RecordColumn;