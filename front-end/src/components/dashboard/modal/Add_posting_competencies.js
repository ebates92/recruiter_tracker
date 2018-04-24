import React from 'react';

const Competencies = (props) => {

    const competency = (props.competencies != '') ? props.competencies.map((competency) => {
        return (
            <div>{competency}</div>
        )
    }) : null

    return(
        <div className='competencies'>
            {competency}
        </div>
    )
}

export default Competencies;