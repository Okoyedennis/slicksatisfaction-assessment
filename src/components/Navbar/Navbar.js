import React from 'react'
import "./Navbar.css"
import logo from "../../asset/MyTestApp.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__wrapper container">
        <div className="img_wrapper">
           <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar;