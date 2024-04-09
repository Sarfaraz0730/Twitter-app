import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import xlogo from "../images/x-logo.jpg";
import { Link } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", formData);
      
      // Assuming the API response contains a 'token' property
      const { token } = response.data;

      // Store the token in local storage
      localStorage.setItem('token', response.data.token);

      // Redirect to the profile page upon successful login
      console.log("response", response)
      if(response.data.message ==="login successful"){

        navigate('/page');
      }else{
        navigate('/login');
      }
    } catch (error) {
      // Handle error and display error message
      setErrorMessage("Wrong credentials. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="Container">
      <div className="logo-icon">
        <img src={xlogo} alt="Logo-icon" />
      </div>
      <div className="main">
        <div className="form-heading">
          <h1 id="Heading">Happening now</h1>
          <h5 id="sub-heading">Join today.</h5>
        </div>
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
              />
            </label>

            <button type="submit">Login</button>

            <Link to="/">
              <button type="button">A new user</button>
            </Link>
          </form>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};
