import React, { Component } from 'react';

const Dropdowns = (props) => {


    const DropdownContainers = props.searchOptions[0].firstName ? (
        props.searchOptions.map((option) => <div onClick={props.searchClickHandler} className='form-dropdowns' id='applicant' accessKey={option.id} key={option.id}>{option.firstName} {option.lastName}</div>)
    ) : (
        props.searchOptions.map((option) => <div onClick={props.searchClickHandler} className='form-dropdowns' id='posting' accessKey={option.id} key={option.id}>{option.positionTitle}</div>)
    ) 


    return (
        <div className='form-dropdown-container'>
            {DropdownContainers}
        </div>
    )
}

export default Dropdowns;