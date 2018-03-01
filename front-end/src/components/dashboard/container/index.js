import React from 'react';
import ProgressBarWrapper from './ProgressBarWrapper.js';
import RecordColumn from './RecordColumn.js';

const Container = (props) => {
  return (
            <div className="container">
              <ProgressBarWrapper />
              <div className="status-columns">
                <RecordColumn postingSelected={props.postingSelected} postingRecords={props.postingRecords} applicantRecords={props.applicantRecords} postingApplicantRecords={props.postingApplicantRecords} />
              </div>
            </div>
          ); 
}

export default Container;