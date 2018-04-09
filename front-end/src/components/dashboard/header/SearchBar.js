import React, {Component} from 'react';
import postingLogo from './posting_logo.png';
import applicantLogo from './applicant_logo.png';
import DropdownMainSearchComponent from '../dropdowns'
import { connect } from 'react-redux';
import { bindActionCreators } from 'react';
import selectedTarget from '../../../actions/selected.js'

const Nothing = () => <span></span>;

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            dropdownMainSearch: null,
            searchTerm: '',
            applicantOptions: '',
            postingOptions: '',
            // filteredList: this.props.defaultRecords
        }
    }

    _onFocusForDropdowns = (event) => {
        this.setState({
            dropdownMainSearch: DropdownMainSearchComponent,
            postingOptions: this.props.postingData[0],
            applicantOptions: this.props.applicantData[0],
        })
        document.querySelector('.whole-searchbar').addEventListener('mouseleave', this._mouseLeave)
    }

    _onChangeForDropdowns = (event) => {
        
                // for when searching
                const searchTerm = event.target.value;
                const expression = new RegExp('^' + searchTerm + '.*', 'gi');
            
                // associating applicant to posting
                  let applicantOptions = this.props.applicantData[0].filter((applicant) => applicant.firstName.concat(applicant.lastName).match(expression));
                  let postingOptions = this.props.postingData[0].filter((posting) => posting.positionTitle.match(expression))
                  this.setState({
                        applicantOptions,
                        postingOptions,
                        searchTerm: event.target.value
                    })
                }

    _onClickSearchDropdown = (event) => {

            this.setState({
                dropdownMainSearch: null
            })
            this.props.selectedTarget(event)
            // will filter the dashboard to show these position records
            // const targetType = event.target.id
            // const targetId = event.currentTarget.accessKey
            // const targetData = (targetType === 'postings') ? (this.props.postingData[0]) : (this.props.applicantData[0])
            // const dataTypeObject = targetData.filter((data) => {
            //     return(data.id === parseInt(event.currentTarget.accessKey))
            // })

            // selectedTarget(targetType,targetId)
        // }


        // if (event.target.id === 'posting') {
        //     this.props.postingSelectedHandler(event)
        // // will open the applicant record
        // } else if ( event.target.id === 'applicant') {
        //     this.props.applicantSelectedHandler(event);
        // }
        
    }


    // FOR UX OF DROPDOWN STAYING OPEN OR CLOSED
        _mouseEnter = (event) => {
            console.log('about to set mouse enter state')

            this.setState({
                dropdownMainSearch: DropdownMainSearchComponent,
                postingOptions: this.props.postingData[0],
                applicantOptions: this.props.applicantData[0],
            })
        }

        _mouseLeave = (event) => {
            this.setState({
                dropdownMainSearch: null,
            })
            console.log('about to add mouseenter')
            document.querySelector('.whole-searchbar').addEventListener('mouseenter', this._mouseEnter, false)
        }

        _onBlurForDropdowns = (event) => {
            console.log('about to remove mouseenter')
            document.querySelector('.whole-searchbar').removeEventListener('mouseenter', this._mouseEnter, false)
            document.querySelector('.whole-searchbar').removeEventListener('mouseleave', this._mouseLeave, false)
            this.setState({
                dropdownMainSearch: null,
                searchTerm: ''
            })
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
function mapStateToProps({ postingData, applicantData }) {
    return { 
        postingData,
        applicantData
     }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    // return bindActionCreators({},dispatch)
    return {
        selectedTarget: (event) => dispatch(selectedTarget(event))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)
// export default SearchBar;