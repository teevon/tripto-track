import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import './Navbar_replace.css';
const Navbar = ({ logout, isAuthenticated }) => {
  return (

    <nav className="navbar navbar-expand-md bg-light navbar-light">
        <Link to="/" className="navbar-brand">
            <img src='
https://res.cloudinary.com/busola/image/upload/c_scale,h_35,w_175/v1569398282/Logo_-_dark.png'
className="nav-brand-image"
>
            </img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon button-nav"></span>
  </button>
  <div className="flex-row-reverse collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/features">Features</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/downloads">Downloads</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/faqs">FAQs</Link>
      </li>    
      <li className="nav-item">
        <Link className="nav-link" to="contact">Contact</Link>
      </li>
      {isAuthenticated?(
          <Fragment>
                 <li className="nav-item">
        <Link className="nav-link" to="/logout"><span className='hide-sm'>Logout</span>{' '}
                    <i className='fas fa-sign-out-alt'> </i></Link>
        {' '}
                    
      </li>
          </Fragment>
      ):(<Fragment>
         <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      </Fragment>)}
    </ul>
  </div> 


    </nav>
     
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
