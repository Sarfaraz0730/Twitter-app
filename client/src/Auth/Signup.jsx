import React from 'react'
import "./Style.css"
import xlogo from '../images/x-logo.jpg';
const Signup = () => {
 
  return (
    <div className='Container'>
    <div className='logo'>
 
       

    <img src={xlogo} alt="Logo" />

    </div>
    <div className='main'>
     <div className='form-heading'>
     <h1 id='Heading'>Happening now</h1>
         <h5 id='sub-heading'>Join today.</h5>
     </div>
     <div className='form-div'>
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
      <div className='select-div'>
      <select>
        <option value="" disabled selected>Day</option>
      
        <option value="1">1</option> ... <option value="31">31</option>
      </select>
      <select>
        <option value="" disabled selected>Month</option>

        <option value="January">January</option> ... <option value="December">December</option> 
      </select>
      <select>
        <option value="" disabled selected>Year</option>

 <option value="2022">2022</option> ... <option value="1950">1950</option> 
      </select>
      </div>
    </label>
    <button type="submit">Create account</button>
    <button type="submit">Already have an account</button>
  </form>
     </div>
    </div>
    </div>
  )
}

export default Signup
