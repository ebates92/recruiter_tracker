import React, {Component} from 'react';

class GlobalActions extends Component {
    constructor(props) {
        super(props);
        this.addTarget = this.addTarget.bind(this);
    }

    render() {
        const buttonStyle = {width: '100px', fontSize: '13px', padding: '0px'};
        return <div className="global-actions-console">
            <div class="ui buttons" id="console-group">
                <button class="ui blue basic button" style={buttonStyle} onClick={this.addTarget}>New Target</button>
                <button class="ui blue basic button" style={buttonStyle}>New Contact</button>
                <button class="ui blue basic button" style={buttonStyle}>Settings</button>
                </div>
                    </div>
    }

    addTarget() {
        document.querySelector('body').setAttribute('style', 'position: fixed');
        document.querySelector('[data-modal-container]').classList.remove('hide');
    }
}

export default GlobalActions; 