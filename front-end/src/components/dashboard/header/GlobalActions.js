import React, {Component} from 'react';

class GlobalActions extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const buttonStyle = {width: '100px', fontSize: '13px', padding: '0px'};
        return <div className="global-actions-console">
            <div class="ui buttons" id="console-group">
                <button class="ui green basic button" style={buttonStyle} onClick={this.props.engagingTheModal}>New Posting</button>
                <button class="ui green basic button" style={buttonStyle} onClick={this.props.engagingTheModal}>New Applicant</button>
                <button class="ui green basic button" style={buttonStyle} onClick={this.props.engagingTheModal}>Add Applicant to Posting</button>
                <button class="ui green basic button" style={buttonStyle}>Settings</button>
                </div>
                    </div>
    }

}

export default GlobalActions; 