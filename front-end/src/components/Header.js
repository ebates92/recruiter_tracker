import React from 'react';
import Filter from './Filter';
import SearchBar from './SearchBar';
import GlobalActions from './GlobalActions';
import RollUpSummary from './RollUpSummary';

// class Header extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             records: this.props.records,
//             onChangeHandler: this.props.onChangeHandler,
//             filteredList: this.props.filteredList
//         }

//     }

//     render() {
//         console.log(this.state.filteredList);
//         return     <header className="header">
//                     <div className="header-top">
//                     <Filter />
//                     <SearchBar onChangeHandler={this.state.onChangeHandler} filteredList={this.state.filteredList}/>
//                     <GlobalActions />
//                     </div>
//                     <div className="header-bottom">
//                     <RollUpSummary totalRecords={this.state.records.length}/>
//                     </div>
//                     </header>
//     }




// }

const Header = (props) => {
    console.log(props.records.length);
    return     <header className="header">
                    <div className="header-top">
                    <Filter />
                    <SearchBar onChangeHandler={props.onChangeHandler} filteredList={props.filteredList} defaultRecords={props.records.slice(0,5)} />
                    <GlobalActions />
                    </div>
                    <div className="header-bottom">
                    <RollUpSummary totalRecords={props.records.length}/>
                    </div>
                    </header>

}

export default Header; 