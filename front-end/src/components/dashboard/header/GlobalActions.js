import React, {Component} from 'react';

class GlobalActions extends Component {
    constructor(props) {
        super(props);
        this.addPosting = this.addPosting.bind(this);
    }

    render() {
        const buttonStyle = {width: '100px', fontSize: '13px', padding: '0px'};
        return <div className="global-actions-console">
            <div class="ui buttons" id="console-group">
                <button class="ui green basic button" style={buttonStyle} onClick={this.addPosting}>New Posting</button>
                <button class="ui green basic button" style={buttonStyle}>New Applicant</button>
                <button class="ui green basic button" style={buttonStyle}>Settings</button>
                </div>
                    </div>
    }

    addPosting() {
        document.querySelector('body').setAttribute('style', 'position: fixed');
        document.querySelector('[data-modal-container]').classList.remove('hide');
    }
}

export default GlobalActions; 