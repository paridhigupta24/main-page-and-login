// components/PrescriptionForm.js
import React, { useState } from 'react';
import './PrescriptionForm.css';
import { useParams } from "react-router-dom";
import axios from "axios";
const PrescriptionForm = ({ onSave }) => {
  let { id } = useParams();
  const [prescription, setPrescription] = useState('');
  const apiUrl = "http://localhost:3002";
  async function SendData() {
    try {
      // Make the POST request using Axios and wait for the response
      const response = await axios.post(`${apiUrl}/prescription`,
      {
        "prescriptionText": prescription,
        "feedbackId": id // Replace with a valid feedback ID from your database
      });
  
      // Handle success
      console.log('Response:', response.data);
    } catch (error) {
  
      console.error('Error:', error);
    }
  }
  const handleSave = () => {
    // Call the onSave prop with the prescription text
    SendData()
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
