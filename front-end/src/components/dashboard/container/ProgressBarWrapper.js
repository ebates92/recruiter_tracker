import React from 'react';

// class ProgressBarWrapper extends Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div className="progressbar-wrapper">
//             <div className="status pipeline">
//               <span>Pipeline</span>
//             </div>
//             <div className="status researching">
//             <span>Researching</span>
//             </div>
//             <div className="status pending">
//             <span>Pending Approval</span>
//             </div>
//             <div className="status approved">
//             <span>Approved</span>
//             </div>
//         </div>
//       );
//     }
//   }

  const ProgressBarWrapper = (props) => {
    return (
      <div className="progressbar-wrapper">
          <div className="status pipeline">
            <span>Sourcing</span>
          </div>
          <div className="status researching">
            <span>Screening</span>
          </div>
          <div className="status pending">
            <span>Initial Interview</span>
          </div>
          <div className="status pending">
            <span>Final Interview</span>
          </div>
          <div className="status pending">
            <span>Verification</span>
          </div>
          <div className="status pending">
            <span>Offer</span>
          </div>
          <div className="status approved">
            <span>Complete</span>
          </div>
      </div>
    );
  }

  export default ProgressBarWrapper;