import React, { Component } from 'react';
import DropdownComponent from '../dropdowns'

const Nothing = () => <span></span>;

class AddApplicantToPosting extends Component {
     constructor(props) {
         super(props);
         this.state = {
             dropdownApplicant: null,
             dropdownPosting: null,
             applicantOptions: this.props.applicantRecords,
             postingOptions: this.props.postingRecords,
         }
     }

     componentWillReceiveProps () {
         this.setState({
            applicantOptions: this.props.applicantRecords,
            postingOptions: this.props.postingRecords,
         })
     }

     _onChangeForDropdowns = (event) => {

        // for when searching
        const searchTerm = event.target.value;
        const expression = new RegExp('^' + searchTerm + '.*', 'gi');
    
        // associating applicant to posting
        if (event.target.name === 'applicant') {
          let applicantOptions = this.props.applicantRecords.filter((applicant) => applicant.firstName.concat(applicant.lastName).match(expression));
          this.setState({
                applicantOptions,
            })
        }
    
        if(event.target.name === 'posting') {
          let postingOptions = this.props.postingRecords.filter((posting) => posting.positionTitle.match(expression))
          this.setState({
                postingOptions,
            })
        }

     }

    _onFocusForDropdownsApplicant = (event) => {
        this.setState({
            dropdownApplicant: DropdownComponent,
            applicantOptions: this.props.applicantRecords,
        })
    }

    _onFocusForDropdownsPosting = (event) => {
        this.setState({
            dropdownPosting: DropdownComponent,
            postingOptions: this.props.postingRecords
        })
    }

    _onBlurForDropdowns = (event) => {
        this.setState({
            dropdownApplicant: null,
            dropdownPosting: null,
            applicantOptions: this.props.applicantRecords,
            postingOptions: this.props.postingRecords,
        })
    }

    render() {
        const DropdownApplicant = this.state.dropdownApplicant || Nothing;
        const DropdownPosting = this.state.dropdownPosting || Nothing;

        return (
            <div className="modal-overlay hide" data-modal-container-addapplicanttoposting>
                <div className="modal-container">
                    <div className="modal-header"><h2>Add Applicant to Posting</h2></div>
                    <div className="modal-body">
                        <form>
                            <div className="col-left">

                                <div className="ui-input"><span className="required"></span><span>Search for Applicant</span>
                                <div className="clearfix"></div>
                                <input type="text" name='applicant' required onFocus={this._onFocusForDropdownsApplicant} onBlur={this._onBlurForDropdowns} onChange={this._onChangeForDropdowns}/>
                                <DropdownApplicant searchOptions={this.state.applicantOptions}/>
                                </div>

                            </div>
                            <div className="col-right">

                                <div className="ui-input"><span className="required"></span><span>Search for Posting</span>
                                <div className="clearfix"></div>
                                <input type="text" name='posting' required onFocus={this._onFocusForDropdownsPosting} onBlur={this._onBlurForDropdowns} onChange={this._onChangeForDropdowns}/>
                                <DropdownPosting searchOptions={this.state.postingOptions}/>
                                </div>

                            </div>
                            <div className="clearfix"></div>
                            <h3>Additional Details</h3>

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
                                <input type="text" name='hiringManager_notes' value={this.props.formObject.hiringManager_notes}/></div>

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