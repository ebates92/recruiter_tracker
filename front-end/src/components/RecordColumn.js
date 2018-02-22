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
    {/* Prospecting */}
    <div className="status-col">
    <Record records={props.records.filter((record) => record.stage === 'Prospecting')} />
    </div>
    {/* Researching */}
    <div className="status-col">
    <Record records={props.records.filter((record) => record.stage === 'Researching')} />
    </div>
    {/* Pending Approval */}
    <div className="status-col">
    <Record records={props.records.filter((record) => record.stage === 'Pending Approval')} />
    </div>
    {/* Approved */}
    <div className="status-col">
    <Record records={props.records.filter((record) => record.stage === 'Approved')} />
    </div>
    </React.Fragment>
  );
}

export default RecordColumn;