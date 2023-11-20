import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("patient"); // Default to patient

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
        userType,
      });

      if (response.data === "exist") {
        // Redirect based on user type
        if (userType === "patient") {
          history("/patientDashboard", { state: { id: email } });
        } else if (userType === "doctor") {
          history("/doctorDashboard", { state: { id: email } });
        }
      } else if (response.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Wrong details");
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form action="POST">
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

      <Link to="/signup">
        <button>Signup Page</button>
      </Link>
    </div>
  );
}

export default Login;
