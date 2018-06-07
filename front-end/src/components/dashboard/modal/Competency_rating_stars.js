import React from 'react';

const CompetencyStars = (props) => {

    const competencyRemoveBrackets = props.competencies.substring(1, props.competencies.length -1)
    const competencySplit = competencyRemoveBrackets.split(',')
    const CompetencyMap = competencySplit.map((competency) => 
        <div className='competency-container'>
            <div className='competency-name'>{competency}</div>
            <div className='stars'>
                <div className='star'>★</div>
                <div className='star'>★</div>
                <div className='star'>★</div>
                <div className='star'>★</div>
                <div className='star'>★</div>
                <div></div>
            </div>
        </div>
    )

    return (
        <React.Fragment>
            {CompetencyMap}
        </React.Fragment>
    )

}

export default CompetencyStars