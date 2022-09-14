import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = ({ headerData, transparent = true }) => {
  const navigate = useNavigate();
  const [navbarToggler, setNavbarToggler] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const payload = localStorage.getItem('userDetails');
    setUser(JSON.parse(payload));
  }, []);

  const logoutHandler = async () => {
    await localStorage.removeItem('userDetails');
    navigate('/login');
  }
  
  return (
    <header className={transparent ? "header header1" : "header header1 header-dark"}>
      <div id="navbar-wrap" className="navbar-wrap">
        <div className="container">
          <div className="navbar-content">
            <div className="site-branding">
              <NavLink to="/" className="logo logo-light"><img src="./image/logo.svg" alt="Logo" /></NavLink>
            </div>

            <nav id="dropdown" className={navbarToggler ? "custom-scroll template-main-menu menu-text-dark nav-expand" : "template-main-menu menu-text-dark nav-collapse"}>
              <nav className="mainmenu-nav" id="mobilemenu-popup">

                <div className="close-btn">
                  <i className="fal fa-times" onClick={() => setNavbarToggler((prevState) => !prevState)}></i>
                </div>

                <ul className="mainmenu">
                  {
                    headerData &&
                    headerData.map(item => {
                      if(user?.email && (item.anchor_Text === "Login" || item.anchor_Text === "Registration")){
                        return null;
                      }else{
                        return <li key={Math.random()} className="nav-item">
                          <NavLink className="scroll" to={item.menu_link}>{item.anchor_Text}</NavLink>
                        </li>
                      }
                    })
                  }
                  {
                    user?.email && <li key={Math.random()} className="nav-item">
                      <NavLink onClick={logoutHandler} className="scroll" to="#">Logout</NavLink>
                    </li>
                  }
                </ul>

                <div className="entry-buttons">
                  <Link to="/get-involved " className="btn-fill">Get Involved</Link>
                </div>

              </nav>
            </nav>

            {/* Hamburger Menu Icon */}
            <ul className="header-action-items" onClick={() => setNavbarToggler((prevState) => !prevState)}>
              <li className="sidemenu-btn">
                <span></span>
                <span></span>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;