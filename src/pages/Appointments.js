// components/Appointments.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Appointments.css'; // Import the CSS file

const Appointments = () => {
  // Sample appointments data
  const appointments = [
    { id: 1, name: 'John Doe', age: 35, gender: 'Male', dob: '1990-01-15', problem: 'Fever' },
    // Add more appointments as needed
  ];

  return (
    <div className="appointments-section">
      
      {/* Display a list of appointments with patient information */}
      {appointments.length > 0 ? (
        <ul className="appointments-list">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="appointment-card">
              <div className="appointment-details">
                <strong>Patient:</strong> {appointment.name}
                <br />
                <strong>Age:</strong> {appointment.age}
              </div>
              <Link to={`/appointment-details/${appointment.id}`}>
                <button className="appointment-button">View Details</button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments available.</p>
      )}
    </div>
  );
};

export default Appointments;
