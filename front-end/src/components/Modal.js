import React from 'react';
import TargetForm from './TargetForm.js';

const closeModal = () => {
    document.querySelector('body').setAttribute('style', 'position: ');
    document.querySelector('[data-modal-container]').classList.add('hide');
}

const Modal = (props) => {
    return (
        <div className="modal-overlay hide" data-modal-container>
            <div className="modal-container">
                <div className="modal-header"><h2>New Target</h2></div>
                <div className="modal-body">
                <TargetForm onFormChangeHandler={props.onFormChangeHandler} />
                </div>
                <div className="modal-footer">
                <button onClick={closeModal}>Cancel</button>
                <button>Save & New</button>
                <button type="submit" onClick={props.onFormSubmission}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;