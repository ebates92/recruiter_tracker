import React from 'react';

const addApplicant = () => {
    const applicantElement = (
        <React.Fragment>
            <div className="col-left">

                <div className="ui-input"><span className="required"></span><span>Applicant Name</span>
                <div className="clearfix"></div>
                <input type="text" required /></div>

                <div className="ui-input"><span>Title</span>
                <div className="clearfix"></div>
                <input type="text" required /></div>

            </div>
            <div className="col-right">

                <div className="ui-input"><span>Email</span>
                <div className="clearfix"></div>
                <input type="email" required /></div>

                <div className="ui-input"><span>Phone</span>
                <div className="clearfix"></div>
                <input type="phone" required /></div>

            </div>
        </React.Fragment>)

    document.querySelector('form').append(applicantElement);
}

const PostingForm = (props) => {
    
    return (
    <form>
        <h3 className="form-legend">Information</h3>

        <div className="col-left">
            
            <div className="ui-input"><span className="required"></span><span>Posting Name</span>
            <div className="clearfix"></div>
            <input type="text" name="postingName" required onChange={props.onFormChangeHandler} /></div>

            <div className="ui-input"><span></span><span>Industry</span>
            <div className="clearfix"></div>
            <input type="text" name="industry" onChange={props.onFormChangeHandler} /></div>

            <div className="ui-input"><span></span><span>Annual Revenue</span>
            <div className="clearfix"></div>
            <input type="number" name="annualRevenue" onChange={props.onFormChangeHandler} /></div>

        </div>
        <div className="col-right">

            <div className="ui-input"><span></span><span>Employees</span>
            <div className="clearfix"></div>
            <input type="number" name="employees"  onChange={props.onFormChangeHandler} /></div>

            <div className="ui-input"><span></span><span>Location</span>
            <div className="clearfix"></div>
            <input type="text" name="location" onChange={props.onFormChangeHandler} /></div>

            <div className="ui-input"><span></span><span>Deal Lead</span>
            <div className="clearfix"></div>
            <input type="text" name="dealLead" onChange={props.onFormChangeHandler} /></div>

        </div>
    </form>
    )
}

const addApplicantToPostingForm = (props) => {
    return (
        <form>
            <div className="clearfix"></div>
            <h3 className="form-legend">Related Applicants</h3>

            <div className="col-left">

                <div className="ui-input"><span className="required"></span><span>Applicant Name</span>
                <div className="clearfix"></div>
                <input type="text" name="relatedApplicantName" required onChange={props.onFormChangeHandler} /></div>

                <div className="ui-input"><span>Title</span>
                <div className="clearfix"></div>
                <input type="text" name="relatedApplicantTitle" required onChange={props.onFormChangeHandler} /></div>

            </div>
            <div className="col-right">

                <div className="ui-input"><span>Email</span>
                <div className="clearfix"></div>
                <input type="email" name="relatedApplicantEmail" required onChange={props.onFormChangeHandler} /></div>

                <div className="ui-input"><span>Phone</span>
                <div className="clearfix"></div>
                <input type="phone" name="relatedApplicantPhone" required onChange={props.onFormChangeHandler} /></div>

            </div>
        </form>
    )

}

export default PostingForm;