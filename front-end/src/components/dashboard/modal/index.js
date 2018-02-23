import React from 'react';
import PostingForm from './PostingForm.js';

const closeModal = () => {
    document.querySelector('body').setAttribute('style', 'position: ');
    document.querySelector('[data-modal-container]').classList.add('hide');
}

const Modal = (props) => {
    return (
        <div className="modal-overlay hide" data-modal-container>
            <div className="modal-container">
                <div className="modal-header"><h2>New Posting</h2></div>
                <div className="modal-body">
                <PostingForm onFormChangeHandler={props.onFormChangeHandler} />
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