import React from 'react';
import './modal.css'; 

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="close-button"><b>Close</b></button>
      </div>
    </div>
  );
};

export default Modal;