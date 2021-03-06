import React, {Component} from 'react';
import logo from './logo.png';
import DropdownPostings from './Dropdown_postings';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // will show/not show the drop down for postings.  When selected, the value for postingSelected will be shared back to the parent
            // so that we can filter the data on the screen.
            postingDropdown: 'no-posting-dropdown'
        }
    }

    render() {
        const postingTitle = (this.props.selectedPosting != 'All' && this.props.postingData != undefined) ? this.props.postingData.filter((data) => data.id === parseInt(this.props.selectedPosting)) : {0:{positionTitle: 'All'}}
        return <div className="filter-logo">
                    <div className="logo">
                        <img src={logo} height="32px" width="32px" alt="logo" />
                    </div>
                    <div className="filter">
                        <h3>Postings</h3>
                        <h2 className='posting-dropdown-title' onClick={this.postingSelectHandler}>{postingTitle[0].positionTitle} <i class="fas fa-caret-down"></i>
                            <div className={this.state.postingDropdown}>
                                <DropdownPostings postingSelectedHandler={this.props.postingSelectedHandler} />
                            </div>
                        </h2>
                    </div>
                </div>
    }

    postingSelectHandler = () => {
        const cssStyle = (this.state.postingDropdown === 'no-posting-dropdown') ? 'yes-posting-dropdown' : 'no-posting-dropdown';
        this.setState({postingDropdown: cssStyle})
        document.querySelector('.posting-dropdown-title').addEventListener('mouseleave', (event) => {
            this.setState({
                postingDropdown: 'no-posting-dropdown'
            })
        })
    }
}

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps({ postingData, selectedPosting }) {
    return {
        postingData,
        selectedPosting
    }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter)
// export default Filter;