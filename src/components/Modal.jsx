import React from 'react';
import  { createPortal } from 'react-dom';
import "./Modal.css";

const Modal = ({children}) => {
    return createPortal(
        <div className="modal-background">
            {children}
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;