/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import xlogo from "../images/x-logo.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    selectedDate: "",
    selectedMonth: "",
    selectedYear: "",
  });

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
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual form submission logic
    console.log("Form submitted with data:", formData);
  };
  console.log("formData ",formData)

  return (
    <div className="Container">
      <div className="logo">
        <img src={xlogo} alt="Logo" />
      </div>
      <div className="main">
        <div className="form-heading">
          <h1 id="Heading">Happening now</h1>
          <h5 id="sub-heading">Join today.</h5>
        </div>
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input
                type="text"
                placeholder="Enter Your Full Name"
                value={formData.fullName}
                onChange={(e) => handleChange(e, "fullName")}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={(e) => handleChange(e, "password")}
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
        </div>
      </div>
    </div>
  );
};

export default Signup;
