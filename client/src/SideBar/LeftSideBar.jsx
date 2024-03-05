import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBell, faEnvelope ,faUser} from '@fortawesome/free-solid-svg-icons';
import "./Style.SideBar.css"
const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      {/* Your sidebar content goes here */}
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faHome} /> Home
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faSearch} /> Explore
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faBell} /> Notifications
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faEnvelope} /> Messages
      </div>
   
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faUser} /> Profile
   

      </div>
      {/* Add more sidebar items as needed */}
      
    </div>
  );
}

export default LeftSideBar;
