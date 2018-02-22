import React from 'react';

const addContact = () => {
    const contactElement = (<React.Fragment>
        <div className="col-left">
        <div className="ui-input"><span className="required"></span><span>Contact Name</span>
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

    document.querySelector('form').append(contactElement);
}

const TargetForm = (props) => {
    
    return (
    <form>
    <h3 className="form-legend">Information</h3>
        <div className="col-left">
            <div className="ui-input"><span className="required"></span><span>Target Name</span>
            <div className="clearfix"></div>
            <input type="text" name="targetName" required onChange={props.onFormChangeHandler} /></div>
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
        <div className="clearfix"></div>
    <h3 className="form-legend">
    Related Contacts
    <button className="add-contact" onClick={addContact}>Add Contact</button>
    </h3>
    <div className="col-left">
    <div className="ui-input"><span className="required"></span><span>Contact Name</span>
    <div className="clearfix"></div>
    <input type="text" name="relatedContactName" required onChange={props.onFormChangeHandler} /></div>
    <div className="ui-input"><span>Title</span>
    <div className="clearfix"></div>
    <input type="text" name="relatedContactTitle" required onChange={props.onFormChangeHandler} /></div>
    </div>
    <div className="col-right">
    <div className="ui-input"><span>Email</span>
    <div className="clearfix"></div>
    <input type="email" name="relatedContactEmail" required onChange={props.onFormChangeHandler} /></div>
    <div className="ui-input"><span>Phone</span>
    <div className="clearfix"></div>
    <input type="phone" name="relatedContactPhone" required onChange={props.onFormChangeHandler} /></div>
    </div>
    </form>
    )
}

export default TargetForm;