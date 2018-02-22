import React, {Component} from 'react';
import targetLogo from './target_logo.png';
import contactLogo from './contact_logo.png';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            inputFocus: false,
            onChangeHandler: this.props.onChangeHandler,
            filteredList: this.props.defaultRecords
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    render() {
        const listItemInfoStyle = {margin: '0px', paddingBottom: '3px'};
        const iconStyle = {fontSize: '.8125rem', color: '#b0adab'};
        const divStyle = {paddingBottom: '3px'};
        const listItems = this.state.filteredList.map((record, i) => <li key={i}><div><img alt="objectType" src={record.objectType !=='Target' ? contactLogo : targetLogo} width="36px" height="36px" /></div> 
        <div><h4 style={listItemInfoStyle}>{record.name}</h4><h6 style={listItemInfoStyle}>{record.objectType}</h6></div></li>)
        return <div className="searchbar-wrapper">
                <div className="searchbar">
                    <input type="text" placeholder="Search for Company or Contact..." onFocus={this.clickHandler} onBlur={this.clickHandler} onChange={this.searchHandler} />
                </div>
                <div style={divStyle}><i className="fas fa-search" style={iconStyle}></i></div>
                <div className="searchbar-dropdown hide" data-dropdown>
                <ul>
                    {listItems}
                </ul>
                    </div>
                </div>
    }

    // Display dropdown menu if searchbar in focus
    clickHandler(event) {
        const e = document.querySelector('[data-dropdown]');
        event.type === 'focus' ? e.classList.remove('hide')
                               : e.classList.add('hide');
    }

    // Update SearchBar state when input value changes
    searchHandler(event) {
        const e = document.querySelector('[data-dropdown]');
        const input = event.target.value;
        this.state.onChangeHandler(input, (filteredList) => {
            // If search results empty, hide dropdown menu
            filteredList.length > 0 ? e.classList.remove('hide')
                                    : e.classList.add('hide');
            this.setState({
                filteredList
            })
        })
    }
}

export default SearchBar;