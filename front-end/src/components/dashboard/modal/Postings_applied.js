import React from 'react';

const PostingsApplied = (props) => {

    const PostingsAppliedArray = props.currentApplicantsPostings.map((applicantPosting) => {

        const postingId = applicantPosting.postingId

        return (
            <div>
                <div>TEST</div>
                <div>{props.postingRecords[postingId].positionTitle}</div>
                <div>{applicantPosting.applicantStage}</div>
                <div>{applicantPosting.isRejected}</div>
                <div>{applicantPosting.hiringManager_notes}</div>
            </div>
        )
    })

    return (
        <div>{PostingsAppliedArray}</div>
    )

}


export default PostingsApplied;

