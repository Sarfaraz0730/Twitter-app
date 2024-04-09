import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import xlogo from "../images/x-logo.jpg";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    selectedDate: "",
    selectedMonth: "",
    selectedYear: "",
    dob: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const monthsInYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  const startYear = 1950;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const handleChange = (e, field) => {
    let updatedFormData = { ...formData, [field]: e.target.value };

    // Calculate and update dob based on selectedDate, selectedMonth, and selectedYear
    if (field === "selectedDate" || field === "selectedMonth" || field === "selectedYear") {
      updatedFormData = {
        ...updatedFormData,
        dob: `${updatedFormData.selectedDate} ${updatedFormData.selectedMonth} ${updatedFormData.selectedYear}`,
      };
    }

    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", formData);

      console.log("Form submitted with data:", formData);
      console.log("Response status:", response);

      if (response.data.message === "Registration Successful") {
        console.log("Form submitted successfully");
        setTimeout(()=>{
          setRegistrationSuccess(true);
        },1000)

        // Redirect to login page using useNavigate
        navigate("/login", { replace: true });
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  console.log("formData", formData);
  console.log("registrationSuccess",registrationSuccess)

  return (
    <div className="Container">
      <div className="logo-icon ">
        <img src={xlogo} alt="Logo" />
      </div>
      <div className="main">
        <div className="form-heading">
          <h1 id="Heading">Happening now</h1>
          <h5 id="sub-heading">Join today.</h5>
        </div>
        <div className="form-div">
          {registrationSuccess ? (
            <div>
              <p>Registration successful! Redirecting to login page...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                Full Name:
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={formData.username}
                  onChange={(e) => handleChange(e, "username")}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={(e) => handleChange(e, "email")}
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={(e) => handleChange(e, "password")}
                  required
                />
              </label>
              <label>
                Date of Birth:
                <div className="select-div">
                  <select
                    value={formData.selectedDate}
                    onChange={(e) => handleChange(e, "selectedDate")}
                  >
                    <option value="" disabled defaultValue>
                      Day
                    </option>
                    {daysInMonth.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                  <select
                    value={formData.selectedMonth}
                    onChange={(e) => handleChange(e, "selectedMonth")}
                  >
                    <option value="" disabled defaultValue>
                      Month
                    </option>
                    {monthsInYear.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    value={formData.selectedYear}
                    onChange={(e) => handleChange(e, "selectedYear")}
                  >
                    <option value="" disabled defaultValue>
                      Year
                    </option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
              <button type="submit">Create account</button>
              <Link to="/login">
                <button type="button">Already have an account</button>
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
