import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo2.png';

const Navbar = () => {
  return (
    <>
      {/* start of header */}
      <nav className="navbar ms-5 navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Bootstrap" width="100" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/Home">Home</Link>
              <Link className="nav-link" to="/ParkingSpaces">Parking Spaces</Link>
              <Link className="nav-link" to="/Feedback">Feedback</Link>
              <Link className="nav-link" to="/Contact">Contact Us</Link>
            </div>
          </div>
          <nav className="navbar bg-bg-transparent">
            <div className="container-fluid">
              <form className="d-flex ms-auto me-4" role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </div>
          </nav>
        </div>
      </nav>
      {/* end of header */}
    </>
  );
};

export default Navbar;
