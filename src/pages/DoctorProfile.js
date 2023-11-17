// components/DoctorProfile.js
import React, { useState } from 'react';
import Menu from './Menu';
import './DoctorProfile.css';

const DoctorProfile = () => {
  const [isEditing, setEditing] = useState(false);

  // Sample doctor data
  const [doctorDetails, setDoctorDetails] = useState({
    name: 'Dr. John Doe',
    specialization: 'Internal Medicine',
    experience: '10+ years',
    education: 'MD, MBBS',
    contact: '123-456-7890',
    email: 'dr.johndoe@example.com',
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Add logic to save the updated details
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="wrapper">
      <Menu />

      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Your Profile</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Profile Section */}
      <div className="doctor-profile-section">
        <div className="container">
          <div className="doctor-profile-container">
            {/* Doctor Portrait */}
            <div className="doctor-portrait">
              <img
                src="data:image/jpeg;base64,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"  /* Replace with your actual image URL */
                alt="Doctor"
              />
              {isEditing ? (
                <button className="save-button" onClick={handleSaveClick}>
                  Save
                </button>
              ) : (
                <button className="edit-button" onClick={handleEditClick}>
                  Edit
                </button>
              )}
            </div>

            {/* Doctor Details */}
            <div className="doctor-details">
              {isEditing ? (
                <>
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={doctorDetails.name}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Specialization:
                    <input
                      type="text"
                      name="specialization"
                      value={doctorDetails.specialization}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Experience:
                    <input
                      type="text"
                      name="experience"
                      value={doctorDetails.experience}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Education:
                    <input
                      type="text"
                      name="education"
                      value={doctorDetails.education}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Contact:
                    <input
                      type="text"
                      name="contact"
                      value={doctorDetails.contact}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={doctorDetails.email}
                      onChange={handleInputChange}
                    />
                  </label>
                </>
              ) : (
                <>
                  <h3>{doctorDetails.name}</h3>
                  <p>Specialization: {doctorDetails.specialization}</p>
                  <p>Experience: {doctorDetails.experience}</p>
                  <p>Education: {doctorDetails.education}</p>
                  <p>Contact: {doctorDetails.contact}</p>
                  <p>Email: {doctorDetails.email}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;

