import React from 'react';

const DropdownPostings = (props) => {
    const postingDivs = props.postingRecords.map((postingRecord) => {
        return (
            <div onClick={props.postingSelectedHandler}>{postingRecord.positionTitle}</div>
        )
    })

    return (
        <React.Fragment>
            <div onClick={props.postingSelectedHandler}>All</div>
            {postingDivs}
        </React.Fragment>
    )
        
}

export default DropdownPostings;