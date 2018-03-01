import React, {Component} from 'react';
// import NewPosting from '../modal/Add_posting.js'
// import NewApplicant from '../modal/Add_applicant.js'
// import AddApplicantToPosting from '../modal/Add_applicant_to_posting.js'

class GlobalActions extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const buttonStyle = {width: '100px', fontSize: '13px', padding: '0px'};
        return <div className="global-actions-console">
            <div class="ui buttons" id="console-group">
                <button class="ui green basic button" id='posting' style={buttonStyle} onClick={this.unhide}>New Posting</button>
                <button class="ui green basic button" id='applicant' style={buttonStyle} onClick={this.unhide}>New Applicant</button>
                <button class="ui green basic button" id='applicanttoposting' style={buttonStyle} onClick={this.unhide}>Add Applicant to Posting</button>
                <button class="ui green basic button" style={buttonStyle}>Settings</button>
            </div>
        </div>
    }

    unhide = (event) => {
        const id = event.target.id
        document.querySelector('body').setAttribute('style', 'position: fixed');
        document.querySelector(`[data-modal-container-${id}]`).classList.remove('hide');
    }

}

export default GlobalActions; 