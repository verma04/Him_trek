import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Nav }  from './Style'

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <div className='flex' >

   <div className='left' >

     <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606367073/Screenshot_from_2020-11-26_10-00-02_xyyv31.png'} ></img>
   <div  className="data">
   <h2>Him Trek Stays</h2>
   <h3>Adventure Begins Here</h3>
   </div>
   </div>


   <div className='right' >

   <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/products"
    >
      About Us
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contacts"
    >
      Campsites
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contacts"
    >
     HomeStays
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contacts"
    >
    Contact
    </NavLink>
    
    
   </div>

        </div>
         
      </Nav>
    );
  }
}

export default Navbar;