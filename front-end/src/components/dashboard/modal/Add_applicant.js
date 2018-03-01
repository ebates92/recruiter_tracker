import React, { Component } from 'react';
// import ModalTypes from './Modal-types.js';

 class NewApplicant extends Component {

    render() {
        return (
            <div className="modal-overlay hide" data-modal-container-applicant>
                <div className="modal-container">
                    <div className="modal-header"><h2>New Applicant</h2></div>
                    <div className="modal-body">
                        <form>
                            <div className="clearfix"></div>
                
                            <div className="col-left">
                
                                <div className="ui-input"><span className="required"></span><span>First name</span>
                                <div className="clearfix"></div>
                                <input type="text" name="firstName" required onChange={this.props.onFormChangeHandler} value={this.props.formObject.firstName}/></div>
                
                                <div className="ui-input"><span className="required"></span><span>Last name</span>
                                <div className="clearfix"></div>
                                <input type="text" name="lastName" required onChange={this.props.onFormChangeHandler} value={this.props.formObject.lastName}/></div>

                                <div className="ui-input"><span className="required"></span><span>Email</span>
                                <div className="clearfix"></div>
                                <input type="text" name="email" required onChange={this.props.onFormChangeHandler} value={this.props.formObject.email}/></div>

                                <div className="ui-input"><span className="required"></span><span>Phone</span>
                                <div className="clearfix"></div>
                                <input type="text" name="phone" required onChange={this.props.onFormChangeHandler} value={this.props.formObject.phone}/></div>
                
                            </div>
                            <div className="col-right">
                
                                <div className="ui-input"><span></span><span>LinkedIn Link</span>
                                <div className="clearfix"></div>
                                <input type="text" name="linked_in" required onChange={this.props.onFormChangeHandler} value={this.props.formObject.linked_in}/></div>

                                {/* <div className="ui-input"><span></span><span>Upload resume</span>
                                <div className="clearfix"></div>
                                <input type="text" name="resume_link" required onChange={this.props.onFormChangeHandler} /></div> */}

                                <div className="ui-input"><span></span><span>Recruiter Notes</span>
                                <div className="clearfix"></div>
                                <input type="text" name="recruiter_notes" required onChange={this.props.onFormChangeHandler} value={this.props.formObject.recruiter_notes}/></div>
                
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button  id='applicant' onClick={this.props.closeModal}>Cancel</button>
                        {/* <button>Save & New</button> */}
                        <button type="submit" id='applicant' onClick={this.props.onFormSubmission}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewApplicant;