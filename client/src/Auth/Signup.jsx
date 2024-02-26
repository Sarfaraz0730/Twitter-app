/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import xlogo from "../images/x-logo.jpg";
const Signup = () => {
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
  console.log("monthsInYear", monthsInYear);
  const currentYear = new Date().getFullYear();
  const startYear = 1950;

  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );
  console.log("years", years);

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
          <form>
            <label>
              Full Name:
              <input type="text" placeholder="Enter Your Full Name" />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter Your Email" />
            </label>
            <label>
              Password:
              <input type="password" placeholder="Enter Your Email" />
            </label>
            <label>
              Date of Birth:
              <div className="select-div">
                <select>
                  <option value="" disabled selected>
                    Day
                  </option>

                  {daysInMonth.map((i) => {
                    return <option value="1">{i}</option>;
                  })}
                </select>
                <select>
                  <option value="" disabled selected>
                    Month
                  </option>

                  {monthsInYear.map((months) => {
                    return <option value="1">{months}</option>;
                  })}
                </select>
                <select>
                  <option value="" disabled selected>
                    Year
                  </option>

                  {years.map((i) => {
                    return <option value="1">{i}</option>;
                  })}
                </select>
              </div>
            </label>
            <button type="submit">Create account</button>
           <Link to="/login"> <button type="submit">Already have an account</button></Link>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
