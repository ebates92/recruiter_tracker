import React, { Component } from 'react';

const Dropdowns = (props) => {


    const DropdownContainers = props.searchOptions[0].firstName ? (
        props.searchOptions.map((option) => <div className='form-dropdowns' key={option.id}>{option.firstName} {option.lastName}</div>)
    ) : (
        props.searchOptions.map((option) => <div className='form-dropdowns' key={option.id}>{option.positionTitle}</div>)
    ) 


    return (
        <div className='form-dropdown-container'>
            {DropdownContainers}
        </div>
    )
}

export default Dropdowns;