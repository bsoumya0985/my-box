import React, { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Box = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState('Initial Value');

  const handleToggle = () => {
    setIsEditMode(!isEditMode);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    // Perform save logic here (e.g., update server or store)
  };

  return (
    <div className="box">
      <h2 className="title">Box Title</h2>
      {isEditMode ? (
        <input
          type="text"
          className="value-input"
          value={value}
          onChange={handleInputChange}
        />
      ) : (
        <p className="value">{value}</p>
      )}
      <div className="actions">
        {isEditMode ? (
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="edit-button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} className='edit-icon' />
            Edit
          </button>
        )}
        <button className="toggle-button" onClick={handleToggle}>
          {isEditMode ? 'Cancel' : 'Toggle'}
        </button>
      </div>
    </div>
  );
};

export default Box;
