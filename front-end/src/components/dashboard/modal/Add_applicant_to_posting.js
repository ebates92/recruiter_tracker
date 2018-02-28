import React, { Component } from 'react';
// import ModalTypes from './Modal-types.js';

const closeModal = () => {
    document.querySelector('body').setAttribute('style', 'position: ');
    document.querySelector('[data-modal-container-addapplicanttoposting]').classList.add('hide');
}

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
                                <input type="text" name='applicant' required /></div>

                            </div>
                            <div className="col-right">

                                <div className="ui-input"><span className="required"></span><span>Posting</span>
                                <div className="clearfix"></div>
                                <input type="text" name='posting' required /></div>

                            </div>
                            <div className="modal-header"><h3>Additional Details</h3></div>

                            <div className="col-left">

                                <div className="ui-input"><span className="required"></span><span>Applicant Stage</span>
                                <div className="clearfix"></div>
                                <input type="text" name='applicantStage' required /></div>

                                {/* <div className="ui-input"><span className="required"></span><span>Remove from Applicants</span>
                                <div className="clearfix"></div>
                                <input type="text" name='isRejected' required /></div> */}

                            </div>
                            <div className="col-right">

                                <div className="ui-input"><span className="required"></span><span>Hiring Manager Notes</span>
                                <div className="clearfix"></div>
                                <input type="text" name='hiringManager_notes' required /></div>

                            </div>
                        
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={closeModal}>Cancel</button>
                        {/* <button>Save & New</button> */}
                        <button type="submit" id='addapplicanttoposting' onClick={this.props.onFormSubmission}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddApplicantToPosting;