import React from 'react';
import './UserModal.css'; 

const UserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>User Profile</h2>
        <button onClick={() => console.log('Logout clicked')}>Logout</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserModal;
