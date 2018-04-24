import React from 'react';

const Competencies = (props) => {
    console.log(props.competencies)
    console.log(props.competencyWeighting)

    const competencies = (props.competencies != '') ? props.competencies.map((competency, index) => {
        const round = Math.round(props.competencyWeighting[index]*1000)/1000
        return (
                <div id="competency" key={index} accessKey={index} className='competency'>
                    <div>{competency}</div>
                    <input name='competencyWeighting' type="number" min="0" step="1" value={round}/>
                </div>
        )
    }) : null

    return(
        <div className='competencies'>
            {competencies}
        </div>
    )
}

export default Competencies;