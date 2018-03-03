import React from 'react';

const PostingsApplied = (props) => {

    const PostingsAppliedArray = props.currentApplicantsPostings.map((applicantPosting) => {

        const postingId = applicantPosting.postingId

        return (
            <div className='relevant-postings-container applicant-component-information-container'>
                <div className='applicant-component-information'>
                    <div className="applicant-component-datafield">Title:  <strong>{props.postingRecords[postingId].positionTitle}</strong></div>
                    <div className="applicant-component-datafield">Stage:  <strong>{applicantPosting.applicantStage}</strong></div>
                    <div className="applicant-component-datafield">Hiring manager notes:  <strong>{applicantPosting.hiringManager_notes}</strong></div>
                    {/* <div className="applicant-component-datafield">{applicantPosting.isRejected}</div> */}
                </div>
            </div>
        )
    })

    return (
        <div>{PostingsAppliedArray}</div>
    )

}


export default PostingsApplied;

