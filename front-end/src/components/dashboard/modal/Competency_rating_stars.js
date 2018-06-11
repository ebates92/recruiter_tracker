import React from 'react';

const CompetencyStars = (props) => {

    const competencyRemoveBrackets = props.competencies.substring(1, props.competencies.length -1)
    const competencySplit = competencyRemoveBrackets.split(',')

    // CREATES THE STARS FOR EACH COMPETENCY
    const CompetencyMap = competencySplit.map((competency,index) => {

        // WILL DETERMINE IF A STAR HAS BEEN SELECTED AND UPDATE THE STAR COMPOSITION
        let starStructureFunction = (index) => {

            // creates the filled stars
            const filledStar = props.starRating[index];

            // includes competency id, accesskey for identifying star clicked, this will allow us to update star ratings.
            const filledComponents = (value) => {
                let x
                let jsx = []
                for (x = 0; x < value; x++) {
                    jsx.push(<div onClick={props.starClick} id={index} accessKey={x+1} className={props.type}><i class="fas fa-star star"></i></div>)
                }
                return (jsx)
            }

            const filledStarComponents = filledComponents(filledStar)

            // creates the empty stars
            const emptyStar = 5 - filledStar;

            // includes competency id, accesskey for identifying star clicked, this will allow us to update star ratings.
            const emptyComponents = (value) => {
                let x
                let starPosition
                let jsx = []
                for (x = 0; x < value; x++) {
                    starPosition = filledStar + (x+1);
                    jsx.push(<div onClick={props.starClick} id={index} accessKey={starPosition} className={props.type}><i class="far fa-star star"></i></div>)
                }
                return (jsx)
            }

            const emptyStarComponents = emptyComponents(emptyStar)

            // SHOULD RETURN THE REACT FRAGMENT WITH THE RESPECTIVELY FILLED/NOTFILLED STARS
            return (
                <React.Fragment>
                    {filledStarComponents}
                    {emptyStarComponents}
                </React.Fragment>
            )
        }

        let starStructure = starStructureFunction(index)
        return (
            <div className='competency-container'>
                <div className='competency-name'>{competency}</div>
                <div className='stars'>
                    {starStructure}
                </div>
            </div>
        )
    })

    return (
        <React.Fragment>
            {CompetencyMap}
        </React.Fragment>
    )

}

export default CompetencyStars