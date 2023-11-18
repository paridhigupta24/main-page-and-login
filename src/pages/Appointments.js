// components/Appointments.js
import React from "react";
import { Link } from "react-router-dom";
import "./Appointments.css"; // Import the CSS file

const Appointments = ({ appointments }) => {
  return (
    <div className="appointments-section">
      {appointments ? (
        <div className="appointment-card">
          <div className="appointment-details">
            <strong>Patient:</strong> {appointments.name}
            <br />
            <strong>Email:</strong> {appointments.email}
            <strong>Phone:</strong> {appointments.phone}
          </div>
          <Link to={`/appointment-details/${appointments._id}`}>
            <button className="appointment-button">View Details</button>
          </Link>
        </div>
      ) : (
        <p>No appointments available.</p>
      )}
    </div>
  );
};

export default Appointments;
