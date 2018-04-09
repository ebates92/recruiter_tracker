import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectedTarget from '../../../actions/selected'

class DropdownPostings extends Component {
// const DropdownPostings = (props) => {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    reduxActionInitiate = (event) => {
        this.props.selectedTarget(event)
    }

    render() {
        const postingDivs = (this.props.postingData != undefined) ? this.props.postingData[0].map((postingRecord) => {
            return (
                <div accessKey={postingRecord.id} id='posting' onMouseDown={this.reduxActionInitiate}>{postingRecord.positionTitle}</div>
            )
        }) : null

        return (
            <React.Fragment>
                <div accessKey='All' id='posting' onMouseDown={this.reduxActionInitiate}>All</div>
                {postingDivs}
            </React.Fragment>
        )
    }   
}

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps({ postingData }) {
    return {
        postingData
    }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    return {
        selectedTarget: (event) => dispatch(selectedTarget(event))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DropdownPostings)
// export default DropdownPostings;