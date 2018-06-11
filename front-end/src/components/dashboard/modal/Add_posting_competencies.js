import React from 'react';

const Competencies = (props) => {

    let _onBlurValidation = (event) => {
        console.log("at least were getting here")
        const reduceWeighting = props.competencyWeighting.reduce((total, currentValue) => { return total + currentValue}, 0);
        const competencyElements = document.querySelectorAll('.competency')
        const textValidation = document.querySelector('.weighting-validation-text')


        // IS THE VALIDATION FOR COMPETENCY WEIGHTINGS = TO 1
        if (reduceWeighting != 1) {
            competencyElements.forEach((competency) => {
                competency.classList.add('weighting-validation')
            })
            textValidation.classList.add('weighting-validation-not-hidden')
         } else {
            competencyElements.forEach((competency) => {
                competency.classList.remove('weighting-validation')
            })
            textValidation.classList.remove('weighting-validation-not-hidden')
        }
    }

    const competencies = (props.competencies != '') ? props.competencies.map((competency, index) => {
        const round = Math.round(props.competencyWeighting[index]*1000)/1000
        return (
                <div id="competency" key={index} accessKey={index} className='competency'>
                    <div>{competency}</div>
                    <input name='competencyWeighting' accessKey={index} type="number" min="0" max='1' step=".01" onBlur={_onBlurValidation} onChange={props.weightingHandler} value={round}/>
                </div>
        )
    }) : null

    return(
        <div className='competencies'>
            <div className="weighting-validation-text">*please make sure that weightings add up to 1*</div>
            {competencies}
        </div>
    )
}

export default Competencies;