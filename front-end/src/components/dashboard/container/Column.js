import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import PropTypes from 'prop-types';

// FOR DROP TARGET WIRING

const columnTarget = {
  canDrop(props) {
    return null
  },

  drop(props) {
    // now do an update function to node application
    console.log('just dropped a duce')
  }
}

const collect = (connect, monitor) => {
  return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	}
}



class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // newPostingApplicantRecords: this.props.postingApplicantRecords,
    }
  }

  render () {
    const { connectDropTarget, isOver, canDrop } = this.props

    return connectDropTarget(
      <div className="status-col" columnType={this.props.columnType}>
        {this.props.children}
      </div>
    );
  }
}

export default DropTarget('record', columnTarget, collect)(Column);