import React, {Component} from 'react';
import logo from './logo.png';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: "All"
        }
    }

    render() {
        return <div className="filter-logo">
                <div className="logo">
                <img src={logo} height="32px" width="32px" alt="logo" />
                </div>
                <div className="filter">
                <h3>Targets</h3>
                <h2>{this.state.currentView} <i class="fas fa-caret-down"></i></h2> 
                </div>
                </div>
    }
}

export default Filter;