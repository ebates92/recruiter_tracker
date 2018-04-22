import React, { Component } from 'react';
// import ModalTypes from './Modal-types.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 class NewPosting extends Component {

    render() {
        const checkboxStyle = {marginTop: '.9rem'}
        const competenciesStyle = {
            display: 'flex',
            marginTop: '1rem'
        }

        const competenciesButtonStyle = {
            minHeight: '1.875rem',
            border: '1px solid rgb(221, 219, 218)',
            borderRadius: '.25rem',
            width: '15%',
            padding: '0 1rem 0 .75rem',
            lineHeight: '1.875rem',
            marginTop: '3px',
            marginBottom: '10px',
            marginLeft: '1rem', 
            color: 'rgba(109, 109, 109, 1)',
            backgroundColor: 'rgb(243, 242, 242)',
            fontSize: '.9rem'
        }

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
                    
                                <div className="ui-input"><span></span><span>Hiring Manager</span>
                                <div className="clearfix"></div>
                                <input type="text" name="hiringManager" onChange={this.props.onFormChangeHandler} value={this.props.formObject.hiringManager}/></div>

                            </div>
                            <div className="col-right">

                                <div className="ui-input"><span></span><span>Salary Range</span>
                                <div className="clearfix"></div>
                                <input type="number" name="salaryRange" onChange={this.props.onFormChangeHandler} value={this.props.formObject.salaryRange}/></div>
                
                    
                                <div className="ui-input"><span></span><span>Filled?</span>
                                <div className="clearfix"></div>
                                <input style={checkboxStyle} type="checkbox" name="isFilled" onChange={this.props.onFormChangeHandler} value={this.props.formObject.isFilled}/></div>
                    
                            </div>

                            <div className="form-posting-bottom">
                                <div className="ui-input" id='override-ui-input'><span className="required"></span><span>Job Description</span>
                                <div className="clearfix"></div>
                                <textarea rows="2" type="text" name="jobDescription" onChange={this.props.onFormChangeHandler} value={this.props.formObject.jobDescription}/></div>

                                <div className="ui-input" id='override-ui-input'><span></span><span>Additional Notes</span>
                                <div className="clearfix"></div>
                                <textarea rows="1" type="text" name="additionalNotes" onChange={this.props.onFormChangeHandler} value={this.props.formObject.additionalNotes}/></div>

                                <div className="ui-input" id='override-ui-input' style={competenciesStyle}><span></span><span>Add Position Competencies</span>
                                <div className="clearfix"></div>
                                <input type="text" name="additionalNotes" placeholder='Strategic Thinker' onChange={this.props.onFormChangeHandler} value={this.props.formObject.competencies}/>
                                <button style={competenciesButtonStyle} type='button' name="competency" onClick="">Add</button></div>
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

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps(state) {
    return {

    }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    return bindActionCreators({},dispatch)
}

// export default connect(mapStateToProps,mapDispatchToProps)(NewPosting);

export default NewPosting;