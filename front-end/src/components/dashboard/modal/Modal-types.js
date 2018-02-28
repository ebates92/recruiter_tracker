// import React, { Component } from 'react';


// class ModalTypes extends Component () {

//     AddApplicanttoPosting = (props) => {
//         return (
//             <form>
//                 <div className="col-left">

//                     <div className="ui-input"><span className="required"></span><span>Applicant Name</span>
//                     <div className="clearfix"></div>
//                     <input type="text" required /></div>

//                 </div>
//                 <div className="col-right">

//                 <div className="ui-input"><span className="required"></span><span>Posting</span>
//                 <div className="clearfix"></div>
//                 <input type="text" required /></div>

//                 </div>
//             </form>
//         )
//     }
    
//     NewPosting = (props) => {
        
//         return (
//         <form>
//             <h3 className="form-legend">Information</h3>
    
//             <div className="col-left">
                
//                 <div className="ui-input"><span className="required"></span><span>Position Title</span>
//                 <div className="clearfix"></div>
//                 <input type="text" name="positionTitle" required onChange={this.props.onFormChangeHandler} /></div>
    
//                 <div className="ui-input"><span className="required"></span><span>Job Description</span>
//                 <div className="clearfix"></div>
//                 <input type="text" name="jobDescription" onChange={this.props.onFormChangeHandler} /></div>
    
//                 <div className="ui-input"><span></span><span>Salary Range</span>
//                 <div className="clearfix"></div>
//                 <input type="number" name="salaryRange" onChange={this.props.onFormChangeHandler} /></div>

//                 <div className="ui-input"><span></span><span>Qualifications</span>
//                 <div className="clearfix"></div>
//                 <input type="text" name="qualifications" onChange={this.props.onFormChangeHandler} /></div>
    
//             </div>
//             <div className="col-right">
    
//                 <div className="ui-input"><span></span><span>Hiring Manager</span>
//                 <div className="clearfix"></div>
//                 <input type="text" name="hiringManager"  onChange={this.props.onFormChangeHandler} /></div>
    
//                 <div className="ui-input"><span></span><span>Additional Notes</span>
//                 <div className="clearfix"></div>
//                 <input type="text" name="additionalNotes" onChange={this.props.onFormChangeHandler} /></div>
    
//                 <div className="ui-input"><span></span><span>Filled?</span>
//                 <div className="clearfix"></div>
//                 <input type="text" name="isFilled" onChange={this.props.onFormChangeHandler} /></div>
    
//             </div>
//         </form>
//         )
//     }
    
//     NewApplicant = (props) => {
//         return (
//             <form>
//                 <div className="clearfix"></div>
//                 <h3 className="form-legend">New Applicants</h3>
    
//                 <div className="col-left">
    
//                     <div className="ui-input"><span className="required"></span><span>First name</span>
//                     <div className="clearfix"></div>
//                     <input type="text" name="firstName" required onChange={this.props.onFormChangeHandler} /></div>
    
//                     <div className="ui-input"><span className="required"></span><span>Last name</span>
//                     <div className="clearfix"></div>
//                     <input type="text" name="lastName" required onChange={this.props.onFormChangeHandler} /></div>

//                     <div className="ui-input"><span className="required"></span><span>Email</span>
//                     <div className="clearfix"></div>
//                     <input type="text" name="email" required onChange={this.props.onFormChangeHandler} /></div>

//                     <div className="ui-input"><span className="required"></span><span>Phone</span>
//                     <div className="clearfix"></div>
//                     <input type="text" name="phone" required onChange={this.props.onFormChangeHandler} /></div>
    
//                 </div>
//                 <div className="col-right">
    
//                     <div className="ui-input"><span></span><span>LinkedIn Link</span>
//                     <div className="clearfix"></div>
//                     <input type="text" name="linked_in" required onChange={this.props.onFormChangeHandler} /></div>

//                     {/* <div className="ui-input"><span></span><span>Upload resume</span>
//                     <div className="clearfix"></div>
//                     <input type="text" name="resume_link" required onChange={this.props.onFormChangeHandler} /></div> */}

//                     <div className="ui-input"><span></span><span>Recruiter Notes</span>
//                     <div className="clearfix"></div>
//                     <input type="text" name="recruiter_notes" required onChange={this.props.onFormChangeHandler} /></div>
    
//                 </div>
//             </form>
//         )}

//         render () {
//             return (
//                 <React.Fragment>
//                     {this.props.modalToDeploy}
//                 </React.Fragment>
//             )
//         }
// }


// export default ModalTypes;