// components/Portfolio.js
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Appointments from "./Appointments";
import axios from "axios";

function Portfolio() {
  const apiUrl = "http://localhost:3002";
  const [Feeback, setFeeback] = useState([]);
  // Example function to get all prescriptions using Axios
  async function getAllPrescriptions() {
    try {
      const response = await axios.get(`${apiUrl}/feedback`);
      const prescriptions = response.data;
      setFeeback(prescriptions);
      console.log(Feeback);
    } catch (error) {
      console.error("Error fetching prescriptions:", error.message);
    }
  }
  const [expandedDetails, setExpandedDetails] = useState({});

  const patients = [
    {
      id: 1,
      name: "John Doe",
      contactDetails: "123-456-7890",
      appointments: [
        /*...*/
      ],
    },
    // Add more patients as needed
  ];

  const toggleDetails = (patientId) => {
    setExpandedDetails((prevDetails) => ({
      ...prevDetails,
      [patientId]: !prevDetails[patientId],
    }));
  };
  useEffect(() => {
    getAllPrescriptions();
  });
  return (
    <div className="wrapper">
      <Menu />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>My Patients</h2>
            </div>
            <div className="col-12">
              <a href="/">Name</a>
              <a href="/">Contact details</a>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio">
        <div className="container">
          <div className="section-header text-center">
            <h2>Appointments</h2>
          </div>
          <div className="row">
            {Feeback.map((patient) => (
              <div
                key={patient._id}
                className="col-12 portfolio-item wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="portfolio-warp">
                  <div className="portfolio-text">
                  <Appointments appointments={patient} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12 load-more">
              <a className="btn" href="#">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
