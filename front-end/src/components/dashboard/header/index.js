import React from 'react';
import Filter from './Filter';
import SearchBar from './SearchBar';
import GlobalActions from './GlobalActions';
import RollUpSummary from './RollUpSummary';

// NO NEED FOR REDUX

const Header = (props) => {
    return (
        <header className="header">
            <div className="header-top">
                <Filter postingSelectedHandler={props.postingSelectedHandler} postingSelected={props.postingSelected} />
                <SearchBar applicantSelectedHandler={props.applicantSelectedHandler} postingSelectedHandler={props.postingSelectedHandler} />
                <GlobalActions calendly_urlClickHandler={props.calendly_urlClickHandler} engagingTheModal={props.engagingTheModal}/>
            </div>
            <div className="header-bottom">
                <RollUpSummary />
            </div>
        </header>
    )
}

export default Header; 