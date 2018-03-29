import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DropdownPostings extends Component {
// const DropdownPostings = (props) => {

    render() {
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
}

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps(state) {
    return {

    }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    return bindActionCreators({},dispatch)
}

// export default connect(mapStateToProps,mapDispatchToProps)(DropdownPostings)
export default DropdownPostings;