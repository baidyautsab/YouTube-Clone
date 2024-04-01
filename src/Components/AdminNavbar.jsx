import React from "react";
import logo from "../Images/youtubelogo.png";
import { IoSearch } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import "../Styles/AdminNavbar.css";

function AdminNavbar() {
  return (
    <div className="adminnavbar">
      <img id="logo" src={logo} alt="" />
      <div className="mid">
        <input type="text" placeholder="search" name="" id="" />
        <button id="nav-btn">
          <IoSearch style={{"fontSize": "20px"}}/>
        </button>
      </div>

      <Dropdown>
        <Dropdown.Toggle className="settings" variant="" id="dropdown-basic">
          <IoIosSettings style={{"fontSize": "23px"}}/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Add Video</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Theme</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default AdminNavbar;
