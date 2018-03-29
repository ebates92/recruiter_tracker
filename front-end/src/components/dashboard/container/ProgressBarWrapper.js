import React from 'react';

// DOESN'T NEED REDUX

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