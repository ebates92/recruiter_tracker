import React, {Component} from 'react';
import DropdownSettingsComponent from '../dropdowns/settings';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// WILL NEED TO REWIRE TO REDUX DUE TO POPOUT MODALS. NEED TO FIX THE OTHERS THAT ARE USING CSS DISPLAY: NONE.


const Nothing = () => <span></span>

class GlobalActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownSettings: null
        }
    }


    _settingsClickHandler = () => {
        if (this.state.dropdownSettings === null) {
            this.setState({
                dropdownSettings: DropdownSettingsComponent
            })
            document.querySelector('.settings-container').addEventListener('mouseleave', (event) => {
                this.setState({
                    dropdownSettings: null
                })
            })
        } else {
            this.setState({
                dropdownSettings: null
            })
        }

    }

    render() {
        const DropdownSettings = this.state.dropdownSettings || Nothing;

        const buttonStyle = {width: '100px', fontSize: '13px', padding: '0px'};
        return <div className="global-actions-console">
            <div class="ui buttons" id="console-group">
                <button class="ui green basic button" id='posting' style={buttonStyle} onClick={this.unhide}>New Posting</button>
                <button class="ui green basic button" id='applicant' style={buttonStyle} onClick={this.unhide}>New Applicant</button>
                <button class="ui green basic button" id='applicanttoposting' style={buttonStyle} onClick={this.unhide}>Add Applicant to Posting</button>
                <div className="settings-container">
                    <button class="ui green basic button" id='removeleftstyling' onClick={this._settingsClickHandler} style={buttonStyle}>Settings</button>
                    <DropdownSettings calendly_urlClickHandler={this.props.calendly_urlClickHandler} settingsClickHandler={this._settingsClickHandler} />
                </div>
            </div>
        </div>
    }

    unhide = (event) => {
        const id = event.target.id
        document.querySelector('body').setAttribute('style', 'position: fixed');
        document.querySelector(`[data-modal-container-${id}]`).classList.remove('hide');
    }

}

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps({state}) {
    return {

    }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    bindActionCreators({},dispatch)
}

// export default connect(mapStateToProps,mapDispatchToProps)(GlobalActions);
export default GlobalActions; 