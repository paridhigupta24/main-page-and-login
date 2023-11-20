import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [userType, setUserType] = useState("patient"); // Default to patient

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        password,
        age,
        phoneNumber,
        bloodGroup,
        userType,
      });

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist") {
        // Redirect based on user type
        if (userType === "patient") {
          history("/patientDashboard", { state: { id: email } });
        } else if (userType === "doctor") {
          history("/doctorDashboard", { state: { id: email } });
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Wrong details");
    }
  }

  return (
    <div className="signup">
      <h1>Signup</h1>

      <form action="POST">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <input
          type="text"
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />
        <input
          type="text"
          onChange={(e) => setBloodGroup(e.target.value)}
          placeholder="Blood Group"
        />

        {/* Radio buttons for user type */}
        <div className="radio-container">
          <label>
            <input
              type="radio"
              value="patient"
              checked={userType === "patient"}
              onChange={() => setUserType("patient")}
            />
            Patient
          </label>
          <label>
            <input
              type="radio"
              value="doctor"
              checked={userType === "doctor"}
              onChange={() => setUserType("doctor")}
            />
            Doctor
          </label>
        </div>

        <input type="submit" onClick={submit} />
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/login">
        <button>Login Page</button>
      </Link>
    </div>
  );
}

export default Signup;
