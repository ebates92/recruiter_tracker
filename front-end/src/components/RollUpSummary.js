import React from 'react';
import Moment from 'react-moment';

// class RollUpSummary extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             total: props.totalRecords,
//             sort: props.sort || "Company Name",
//             lastUpdated: '1976-04-19T12:59-0500'
//         }
//     }

//     render() {
//         const iconStyle = {fontSize: '3px', display: 'block', alignSelf: 'center'};
//         return <div className="listview-info">
//                 <div>{this.state.total} items</div>
//                 <i class="fas fa-circle" style={iconStyle}></i>
//                  <div>Sorted by {this.state.sort}</div>
//                 <i class="fas fa-circle" style={iconStyle}></i>
//                  <div>Last updated <Moment fromNow ago>{this.state.lastUpdated}</Moment> ago</div>
//                 </div>
//     }
// }

const RollUpSummary = (props) => {
    const iconStyle = {fontSize: '3px', display: 'block', alignSelf: 'center'};
        return <div className="listview-info">
                <div>{props.totalRecords} items</div>
                <i class="fas fa-circle" style={iconStyle}></i>
                 <div>Sorted by Placeholder</div>
                <i class="fas fa-circle" style={iconStyle}></i>
                 <div>Last updated <Moment fromNow ago>PlaceHolder</Moment> ago</div>
                </div>
}

export default RollUpSummary;