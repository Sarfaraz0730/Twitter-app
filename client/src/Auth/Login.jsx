import React from 'react'
import xlogo from "../images/x-logo.jpg";
import { Link } from 'react-router-dom';
export const Login = () => {
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
            Email:
            <input type="email" placeholder="Enter Your Email" />
          </label>
          <label>
            Password:
            <input type="password" placeholder="Enter Your Email" />
          </label>
         
          <button type="submit">Login</button>
         <Link to="/"> <button type="submit">A new user</button></Link>
          
        </form>
      </div>
    </div>
  </div>
  )
}
