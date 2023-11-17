// components/PrescriptionForm.js
import React, { useState } from 'react';
import './PrescriptionForm.css';

const PrescriptionForm = ({ onSave }) => {
  const [prescription, setPrescription] = useState('');

  const handleSave = () => {
    // Call the onSave prop with the prescription text
    onSave(prescription);
  };

  return (
    <div className="prescription-form">
      <h3>Prescription</h3>
      <textarea
        value={prescription}
        onChange={(e) => setPrescription(e.target.value)}
        placeholder="Write your prescription here..."
      ></textarea>
      <div className="form-buttons">
        <button onClick={handleSave}>Save Prescription</button>
        {/* Add a cancel or close button if needed */}
      </div>
    </div>
  );
};

export default PrescriptionForm;
