import React, {Component} from 'react';
import postingLogo from './posting_logo.png';
import applicantLogo from './applicant_logo.png';
import DropdownMainSearchComponent from '../dropdowns'
import { connect } from 'react-redux';
import { bindActionCreators } from 'react';

const Nothing = () => <span></span>;

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            dropdownMainSearch: null,
            searchTerm: '',
            applicantOptions: this.props.applicantRecords,
            postingOptions: this.props.postingRecords,
            // filteredList: this.props.defaultRecords
        }
    }

    componentWillReceiveProps () {
        this.setState({
           applicantOptions: this.props.applicantRecords,
           postingOptions: this.props.postingRecords,
        })
    }

    _onFocusForDropdowns = (event) => {
        this.setState({
            dropdownMainSearch: DropdownMainSearchComponent,
            postingOptions: this.props.postingRecords,
            applicantOptions: this.props.applicantRecords,
        })
        document.querySelector('.whole-searchbar').addEventListener('mouseleave', this._mouseLeave)
    }

    _onChangeForDropdowns = (event) => {
        
                // for when searching
                const searchTerm = event.target.value;
                const expression = new RegExp('^' + searchTerm + '.*', 'gi');
            
                // associating applicant to posting
                  let applicantOptions = this.props.applicantRecords.filter((applicant) => applicant.firstName.concat(applicant.lastName).match(expression));
                  let postingOptions = this.props.postingRecords.filter((posting) => posting.positionTitle.match(expression))
                  this.setState({
                        applicantOptions,
                        postingOptions,
                        searchTerm: event.target.value
                    })
                }

    _onClickSearchDropdown = (event) => {
        this.setState({
            mainSearch: event.target.innerHTML,
            dropdownMainSearch: null
        })
        // will filter the dashboard to show these position records
        if (event.target.id === 'posting') {
            this.props.postingSelectedHandler(event)
        // will open the applicant record
        } else if ( event.target.id === 'applicant') {
            this.props.applicantSelectedHandler(event);
        }
        
    }


    // FOR UX OF DROPDOWN STAYING OPEN OR CLOSED
        _mouseEnter = (event) => {
            console.log('about to set mouse enter state')
            console.log("Posting Data",this.props.postingData)
            this.setState({
                dropdownMainSearch: DropdownMainSearchComponent,
                postingOptions: this.props.postingRecords,
                applicantOptions: this.props.applicantRecords,
            })
        }

        _mouseLeave = (event) => {
            this.setState({
                dropdownMainSearch: null,
                mainSearch: ''
            })
            console.log('about to add mouseenter')
            document.querySelector('.whole-searchbar').addEventListener('mouseenter', this._mouseEnter, false)
        }

        _onBlurForDropdowns = (event) => {
            console.log('about to remove mouseenter')
            document.querySelector('.whole-searchbar').removeEventListener('mouseenter', this._mouseEnter, false)
            document.querySelector('.whole-searchbar').removeEventListener('mouseleave', this._mouseLeave, false)
        }


    render() {
        const DropdownMainSearch = this.state.dropdownMainSearch || Nothing;
        const listItemInfoStyle = {margin: '0px', paddingBottom: '3px'};
        const iconStyle = {fontSize: '.8125rem', color: '#b0adab'};
        const divStyle = {paddingBottom: '3px'};
        return (
                <div className='whole-searchbar'>
                    <div className="searchbar-wrapper">
                        <div className="searchbar">
                            <input type="text" value={this.state.searchTerm} placeholder="Search for Posting or Applicant..." onChange={this._onChangeForDropdowns} onClick={this._onFocusForDropdowns} onBlur={this._onBlurForDropdowns}/>
                        </div>
                        <div className='search-icon' style={divStyle}><i className="fas fa-search" style={iconStyle}></i></div> 
                    </div>
                    <DropdownMainSearch onClickSearchDropdown={this._onClickSearchDropdown} applicantOptions={this.state.applicantOptions} postingOptions={this.state.postingOptions}/>
                </div>
        )
    }
}

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps(state) {
    return { postingData: state.postingRecords }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    // return bindActionCreators({},dispatch)
    return null
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)
// export default SearchBar;