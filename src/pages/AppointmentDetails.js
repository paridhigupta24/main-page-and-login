import React, { useState, useEffect } from "react";
import PrescriptionForm from "./PrescriptionForm";
import "./AppointmentDetails.css"; // Import the CSS file
import { useParams } from "react-router-dom";
import axios from "axios";

const AppointmentDetails = ({ match }) => {
  let { id } = useParams();
  const [appointment, setappointment] = useState("");
  const apiUrl = "http://localhost:3002";
  const [isPrescriptionFormVisible, setPrescriptionFormVisibility] =
    useState(false);
  const [prescription, setPrescription] = useState("");

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

  async function getAllData() {
    try {
      const response = await axios.get(`${apiUrl}/feedback/${id}`);
      const data = response.data;
      setappointment(data);
      console.log('====================================');
      console.log(appointment);
      console.log('====================================');
    } catch (error) {
      console.error("Error fetching prescriptions:", error.message);
    }
  }




  useEffect(() => {
    getAllData();
  }, []);
  useEffect(()=>{
    console.log('====================================');
    console.log(prescription);
    console.log('====================================');
  })
  return (
    <div className="appointment-details-section">
      <h2>Appointment Details</h2>
      <div className="appointment-details">
        <p>
          <strong>Name:</strong> {appointment.name}
        </p>
        <p>
          <strong>Doctor:</strong> {appointment.doctor}
        </p>
        <p>
          <strong>Phone:</strong> {appointment.phone}
        </p>
        <p>
          <strong>Message:</strong> {appointment.message}
        </p>
        <p>
          <strong>Email:</strong> {appointment.email}
        </p>
        <p>
          <strong>AppointmentTime:</strong> {appointment.appointmentTime}
        </p>
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
