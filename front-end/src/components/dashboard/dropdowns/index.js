import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// PRETTY SURE ON SECOND LOOK THIS DOESN'T NEED REDUX

// class Dropdowns extends Component {
const Dropdowns = (props) => {

    const dropdownContainers = () => {

        // FOR APPLICANT TO POSTING FORM
        if (props.searchOptions) {

             //  FOR APPLICANT SEARCH IN FORM
            if (props.searchOptions[0].firstName) {
                return props.searchOptions.map((option) => <div onClick={props.searchClickHandler} className='form-dropdowns' id='applicant' accessKey={option.id} key={option.id}>{option.firstName} {option.lastName}</div>);

            // FOR POSTING SEARCH IN FORM
            } else if (props.searchOptions[0].positionTitle) {
                return props.searchOptions.map((option) => <div onClick={props.searchClickHandler} className='form-dropdowns' id='posting' accessKey={option.id} key={option.id}>{option.positionTitle}</div>);
            }

        // FOR MAINSEARCH BAR
        } else if (props.applicantOptions || props.postingOptions) {
            const postingComponents = props.postingOptions.map((option) => <div onMouseDown={props.onClickSearchDropdown} className='form-dropdowns search-dropdowns' id='posting' accessKey={option.id} key={option.id}>{option.positionTitle}</div>);
            const applicantComponents = props.applicantOptions.map((option) => <div onMouseDown={props.onClickSearchDropdown} className='form-dropdowns search-dropdowns' id='applicant' accessKey={option.id} key={option.id}>{option.firstName} {option.lastName}</div>);
            const postingComponentsSlice = postingComponents.slice(0,5);
            const applicantComponentsSlice = applicantComponents.slice(0,5);

            return (
                <div className='form-dropdown-container searchbar-dropdown-container'>
                    <div className='search-dropdown-headings'><strong>Applicants</strong></div>
                    <div>
                        {applicantComponentsSlice}
                    </div>
                    <div className='search-dropdown-headings'><strong>Postings</strong></div>
                    <div>
                        {postingComponentsSlice}
                    </div>
                </div>
            )
        } else {return null}
    }

    // render() {
        let DropdownContainers = dropdownContainers()

        return (
            <div className='form-dropdown-container'>
                {DropdownContainers}
            </div>
        )
    }    
// }

// REDUX APPLICATION STATE (COMBINED REDUCERS)
function mapStateToProps(state) {
    return {

    }
}

// REDUX EVENT HANDLERS (ACTIONS)
function mapDispatchToProps(dispatch) {
    return bindActionCreators({},dispatch)
}

// export default connect(mapStateToProps,mapDispatchToProps)(SettingsDropdown);
export default Dropdowns;