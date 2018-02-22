import React from 'react';
import ProgressBarWrapper from './ProgressBarWrapper.js';
import RecordColumn from './RecordColumn.js';

// class Container extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         records: props.records
//       }
//     }
  
//     render() {
//       console.log(this.state.records);
//       return (
//         <div className="container">
//         <ProgressBarWrapper />
//         <div className="status-columns">
//         <RecordColumn records={this.state.records} />
//         </div>
//         </div>
//       );
//     }
//   }

const Container = (props) => {
  return (
            <div className="container">
            <ProgressBarWrapper />
            <div className="status-columns">
            <RecordColumn records={props.records} />
            </div>
            </div>
          ); 
}

export default Container;