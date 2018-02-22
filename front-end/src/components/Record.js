import React from 'react';

// class Record extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         records: props.records
//       }
//     }
  
//     render() {
//         const recordCards = this.state.records.map(record => 
//             (<a href="#" class="ui card" id="card">
//             <h3>{record.name}</h3>
//                 <div class="content" id="card-content">
//                 <h4><strong>Annual Revenue:</strong><span> {record.annualRevenue}</span></h4>
//                 <h4><strong>Location:</strong><span> Kentucky</span></h4>
//                 <h4><strong>Deal Lead:</strong><span> {record.dealLead}</span></h4>
//                 <h4><strong>Stage:</strong><span> {record.stage}</span></h4>
//                  </div>
//               </a>)
//         )
//       return (
//           <React.Fragment>
//           {recordCards}
//           </React.Fragment>
//       );
//     }
//   }


const Record = (props) => {
  const recordCards = props.records.map(record => 
    (<a href="/" className="ui card" id="card" key={record.id}>
    <h3>{record.name}</h3>
        <div className="content" id="card-content">
        <h4><strong>Annual Revenue:</strong><span> {record.annualRevenue}</span></h4>
        <h4><strong>Location:</strong><span> Kentucky</span></h4>
        <h4><strong>Deal Lead:</strong><span> {record.dealLead}</span></h4>
        <h4><strong>Stage:</strong><span> {record.stage}</span></h4>
         </div>
      </a>)
  )
    return (
      <React.Fragment>
      {recordCards}
      </React.Fragment>
    )
}

export default Record;