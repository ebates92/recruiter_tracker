import React, { Component } from 'react';
import ModalTypes from './Modal-types.js';

const closeModal = () => {
    document.querySelector('body').setAttribute('style', 'position: ');
    document.querySelector('[data-modal-container]').classList.add('hide');
}

 class Modal extends Component {

    render() {
        return (
            <div className="modal-overlay" data-modal-container>
                <div className="modal-container">
                    <div className="modal-header"><h2>{this.props.modalType}</h2></div>
                    <div className="modal-body">
                        {this.props.children}
                    
                    </div>
                    <div className="modal-footer">
                    <button onClick={closeModal}>Cancel</button>
                    <button>Save & New</button>
                    <button type="submit" onClick={this.props.onFormSubmission}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;