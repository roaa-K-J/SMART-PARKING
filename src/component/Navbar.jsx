import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo2.png';
import '../style/Nav.css';
const Navbar = () => {
  return (
    <div>
       <nav>
            <ul>
                <li><img className="imo" src={logo} alt="logo.png" /></li>
                <li>
                  <Link to="/">Home</Link>
                  </li>
                <li>
                   <Link to="/ViewParking">Parking Spaces</Link>
                   </li>
                <li>
                  <Link to="/about">About Us</Link>
                  </li>
                <li>
                  <Link to="/feedback">Feedback</Link>
                  </li>
                <li> 
               
                  <Link to="/contact">Contact Us</Link>
                  </li>
            </ul>

        </nav>
       
    </div>

  );
};

export default Navbar;