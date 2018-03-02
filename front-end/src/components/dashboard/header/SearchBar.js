import React, {Component} from 'react';
import postingLogo from './posting_logo.png';
import applicantLogo from './applicant_logo.png';
import DropdownMainSearchComponent from '../dropdowns'

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

    _onFocusForDropdownsPosting = (event) => {
        this.setState({
            dropdownMainSearch: DropdownMainSearchComponent,
            postingOptions: this.props.postingRecords,
            applicantOptions: this.props.applicantRecords,
        })
        document.querySelector('.searchbar-wrapper').addEventListener('mouseleave', (event) => {
            this.setState({
                dropdownMainSearch: null,
                mainSearch: ''
            })
        })
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
                        searchTerm: event.target.value
                    })
                }

    render() {
        const DropdownMainSearch = this.state.dropdownMainSearch || Nothing;
        const listItemInfoStyle = {margin: '0px', paddingBottom: '3px'};
        const iconStyle = {fontSize: '.8125rem', color: '#b0adab'};
        const divStyle = {paddingBottom: '3px'};
        return <div className="searchbar-wrapper">
                    <div className="searchbar">
                        <input type="text" placeholder="Search for Posting or Applicant..."/>
                    </div>
                    <div style={divStyle}><i className="fas fa-search" style={iconStyle}></i></div>
                    <DropdownMainSearch applicantOptions={this.state.applicantOptions} postingOptions={this.state.postingOptions}/>
                </div>
    }

}

export default SearchBar;