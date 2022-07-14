import React from 'react';
import {Link} from 'react-router-dom';
import GeneralLayout from '../HOC/GeneralLayout';

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <Link className='navbar-brand mx-1 fw-bold h-2' to="/">
    KAYIKAM
    </Link>
    <ul className="navbar-nav mx-5">
        <li className="nav-item">
            <Link className='nav-link' to="/">
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/aboutUs">
                About Us
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/student/login">
                Login
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/register">
                Register
            </Link>
        </li>
    </ul>
    </div>
    </nav>
  );
}

export default Nav;
//export default GeneralLayout(Nav);