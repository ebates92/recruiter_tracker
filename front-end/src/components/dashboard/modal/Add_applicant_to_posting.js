import React, { Component } from 'react';
// import ModalTypes from './Modal-types.js';

 class AddApplicantToPosting extends Component {

    render() {
        return (
            <div className="modal-overlay hide" data-modal-container-addapplicanttoposting>
                <div className="modal-container">
                    <div className="modal-header"><h2>Add Applicant to Posting</h2></div>
                    <div className="modal-body">
                        <form>
                            <div className="col-left">

                                <div className="ui-input"><span className="required"></span><span>Applicant Name</span>
                                <div className="clearfix"></div>
                                <input type="text" name='applicant' required value={this.props.formObject.applicant}/></div>

                            </div>
                            <div className="col-right">

                                <div className="ui-input"><span className="required"></span><span>Posting</span>
                                <div className="clearfix"></div>
                                <input type="text" name='posting' required value={this.props.formObject.posting}/></div>

                            </div>
                            <div className="modal-header"><h3>Additional Details</h3></div>

                            <div className="col-left">

                                <div className="ui-input"><span className="required"></span><span>Applicant Stage</span>
                                <div className="clearfix"></div>
                                <input type="text" name='applicantStage' required value={this.props.formObject.applicantStage}/></div>

                                {/* <div className="ui-input"><span className="required"></span><span>Remove from Applicants</span>
                                <div className="clearfix"></div>
                                <input type="text" name='isRejected' required value={this.props.formObject.isRejected}/></div> */}

                            </div>
                            <div className="col-right">

                                <div className="ui-input"><span className="required"></span><span>Hiring Manager Notes</span>
                                <div className="clearfix"></div>
                                <input type="text" name='hiringManager_notes' required value={this.props.formObject.hiringManager_notes}/></div>

                            </div>
                        
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button id='addapplicanttoposting' onClick={this.props.closeModal}>Cancel</button>
                        {/* <button>Save & New</button> */}
                        <button type="submit" id='addapplicanttoposting' onClick={this.props.onFormSubmission}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddApplicantToPosting;