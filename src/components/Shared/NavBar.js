import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";


const NavBar = () => {
  
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);




  return (

    <>

    {
      logo.map(e=> <header className="navbar-area nav-style-two">
      
      {/* menu for mobile device */}
      <div className="mobile-nav">
        <a href="/" className="logo">
          <img src={e.logo} alt="logo_light" />
          
        </a>
      </div>
      {/* menu for desktop device*/}
      <div className="main-nav">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={e.logo} alt="logo_light" />
              <img src={e.logo} alt="logo-dark" />
            </a>
            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link ">Home</a>
                  
                </li>
                
                <li className="nav-item">
                  <a href="/pricing" className="nav-link">pricing</a>
                </li>
               
                <li className="nav-item">
                  <a href="/contact" className="nav-link">contact</a>
                </li>
              </ul>
              {/* <div className="search-item">
                <div className="search-btn">
                  <i className="open-btn envy envy-magnify-glass" />
                  <i className="close-btn envy envy-close" />
                </div>
                <div className="search-overlay search-popup">
                  <form className="search-form">
                    <input className="search-input" name="search" placeholder="Search" type="text" />
                    <button className="btn btn-solid" type="submit">
                      <i className="envy envy-magnify-glass" />
                    </button>
                  </form>
                </div>
              </div> */}
              {
                user ?
                <div className="cta-btn">
                <a href="/dashboard" className="btn btn-outline">
                  <i className="envy envy-user" />
                  Dashboard
                </a>
              </div>
              :
              <div className="cta-btn">
              <a href="/login" className="btn btn-outline">
                <i className="envy envy-user" />
                Log in
              </a>
            </div>
              }
              {
                users.map(u=> u.userEmail === user?.email && u.userRole === 'Admin' &&
                <div className="cta-btn">
                <Link to="/admin" className="btn btn-outline">
                  <i className="envy envy-user" />
                  Admin
                </Link>
              </div>
              )
            
              }
             
            </div>
          </div>
        </nav>
      </div>
    </header>)

    }
    

    </>
  );
};

export default NavBar;
