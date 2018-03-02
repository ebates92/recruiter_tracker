import React from 'react';
import Filter from './Filter';
import SearchBar from './SearchBar';
import GlobalActions from './GlobalActions';
import RollUpSummary from './RollUpSummary';

const Header = (props) => {
    return (
        <header className="header">
            <div className="header-top">
                <Filter postingSelectedHandler={props.postingSelectedHandler} postingSelected={props.postingSelected} postingRecords={props.postingRecords}/>
                <SearchBar applicantSelectedHandler={props.applicantSelectedHandler} postingSelectedHandler={props.postingSelectedHandler} postingRecords={props.postingRecords} applicantRecords={props.applicantRecords} />
                <GlobalActions engagingTheModal={props.engagingTheModal}/>
            </div>
            <div className="header-bottom">
                <RollUpSummary totalRecords={props.postingRecords.length}/>
            </div>
        </header>
    )
}

export default Header; 