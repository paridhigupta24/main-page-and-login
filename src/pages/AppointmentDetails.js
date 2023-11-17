import React, { useState } from 'react';
import PrescriptionForm from './PrescriptionForm';
import './AppointmentDetails.css'; // Import the CSS file

const AppointmentDetails = ({ match }) => {
  const [isPrescriptionFormVisible, setPrescriptionFormVisibility] = useState(false);
  const [prescription, setPrescription] = useState('');

  const togglePrescriptionForm = () => {
    setPrescriptionFormVisibility(!isPrescriptionFormVisible);
  };

  const savePrescription = (newPrescription) => {
    setPrescription(newPrescription);
    togglePrescriptionForm();
  };

  const cancelPrescription = () => {
    togglePrescriptionForm();
  };

  const handleSavePrescription = (newPrescription) => {
    // Update the prescription state when saved
    setPrescription(newPrescription);
  };

  // Sample appointment data (replace with actual data fetching logic)
  const appointment = {
    id: 1,
    name: 'John Doe',
    age: 35,
    gender: 'Male',
    dob: '1990-01-15',
    problem: 'Fever',
  };

  return (
    <div className="appointment-details-section">
      <h2>Appointment Details</h2>
      <div className="appointment-details">
        <p><strong>Name:</strong> {appointment.name}</p>
        <p><strong>Age:</strong> {appointment.age}</p>
        <p><strong>Gender:</strong> {appointment.gender}</p>
        <p><strong>Date of Birth:</strong> {appointment.dob}</p>
        <p><strong>Problem:</strong> {appointment.problem}</p>
      </div>
      <div className="prescription-section">
          {prescription && (
            <>
              <h3>Prescription</h3>
              <p>{prescription}</p>
            </>
          )}
          <PrescriptionForm onSave={handleSavePrescription} />
        </div>
      
      {isPrescriptionFormVisible && (
        <PrescriptionForm
          onSave={savePrescription}
          onCancel={cancelPrescription}
          initialPrescription={prescription}
        />
      )}
    </div>
  );
};

export default AppointmentDetails;
