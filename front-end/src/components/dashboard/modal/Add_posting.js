import React, { Component } from 'react';
// import ModalTypes from './Modal-types.js';

 class NewPosting extends Component {

    render() {
        return (
            <div className="modal-overlay hide" data-modal-container-posting>
                <div className="modal-container">
                    <div className="modal-header"><h2>New Posting</h2></div>
                    <div className="modal-body">
                        <form>
                    
                            <div className="col-left">
                                
                                <div className="ui-input"><span className="required"></span><span>Position Title</span>
                                <div className="clearfix"></div>
                                <input type="text" name="positionTitle" required onChange={this.props.onFormChangeHandler} value={this.props.formObject.positionTitle}/></div>
                    
                                <div className="ui-input"><span className="required"></span><span>Job Description</span>
                                <div className="clearfix"></div>
                                <input type="text" name="jobDescription" onChange={this.props.onFormChangeHandler} value={this.props.formObject.jobDescription}/></div>
                    
                                <div className="ui-input"><span></span><span>Salary Range</span>
                                <div className="clearfix"></div>
                                <input type="number" name="salaryRange" onChange={this.props.onFormChangeHandler} value={this.props.formObject.salaryRange}/></div>

                                <div className="ui-input"><span></span><span>Qualifications</span>
                                <div className="clearfix"></div>
                                <input type="text" name="qualifications" onChange={this.props.onFormChangeHandler} value={this.props.formObject.qualifications}/></div>
                    
                            </div>
                            <div className="col-right">
                    
                                <div className="ui-input"><span></span><span>Hiring Manager</span>
                                <div className="clearfix"></div>
                                <input type="text" name="hiringManager"  onChange={this.props.onFormChangeHandler} value={this.props.formObject.hiringManager}/></div>
                    
                                <div className="ui-input"><span></span><span>Additional Notes</span>
                                <div className="clearfix"></div>
                                <input type="text" name="additionalNotes" onChange={this.props.onFormChangeHandler} value={this.props.formObject.additionalNotes}/></div>
                    
                                <div className="ui-input"><span></span><span>Filled?</span>
                                <div className="clearfix"></div>
                                <input type="text" name="isFilled" onChange={this.props.onFormChangeHandler} value={this.props.formObject.isFilled}/></div>
                    
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button id='posting' onClick={this.props.closeModal}>Cancel</button>
                        {/* <button>Save & New</button> */}
                        <button type="submit" id='posting' onClick={this.props.onFormSubmission}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPosting;