import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RollUpSummary extends Component {
// const RollUpSummary = (props) => {
    render() {
        const iconStyle = {fontSize: '3px', display: 'block', alignSelf: 'center'};
            return <div className="listview-info">
                    <div>{props.totalRecords} postings showing</div>
                    {/* <i class="fas fa-circle" style={iconStyle}></i>
                    <div>Sorted by Placeholder</div> */}
                    {/* <i class="fas fa-circle" style={iconStyle}></i>
                    <div>Last updated <Moment fromNow ago>PlaceHolder</Moment> ago</div> */}
                    </div>
    }
}

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps(state) {
    return {

    }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    bindActionCreators({},dispatch)
}

// export default connect(mapStateToProps,mapDispatchToProps)(RollUpSummary)
export default RollUpSummary;