import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBell, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import xlog from "../images/x-logo.jpg";
import "./Style.SideBar.css";

const LeftSideBar = () => {
  return (
    <div className="left-sidebar">
      <div className='top-hamburger'>
        <img className="logo" src={xlog} alt="Logo" />
      </div>
      <div className="sidebar-items">
        <div className="sidebar-item active">
          <FontAwesomeIcon icon={faHome} /> <span>Home</span>
        </div>
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faSearch} /> <span>Explore</span>
        </div>
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faBell} /> <span>Notifications</span>
        </div>
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faEnvelope} /> <span>Messages</span>
        </div>
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
        </div>
      </div>
      <div className='bottom-div'>
        <div className='user-profile-pic'></div>
        <div className='user-details'>
          <div className='user-name'>Sarfaraz</div>
          <div className='username'>username</div>
        </div>
      </div>

    </div>
  );
}

export default LeftSideBar;
