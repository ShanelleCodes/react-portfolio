import React, { useState } from 'react';
import "../styles/Navbar.css";
import { Link, useLocation } from 'react-router-dom';


export default function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const closeNavbar = () => {
        setIsNavExpanded(false);
      };

    const location = useLocation();

    const isProjectPage = ["/project01", "/project02", "/graphicdesign"].includes(location.pathname);

  return (
    <nav className={`navbar ${isNavExpanded ? "expanded" : ""}`}>
    <button
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
 
    <div className="logo">
            <a href="#home" className="nav__link"><img src="img/logoBlack.png" alt="" /></a>
    </div>

    <div className={`links ${isNavExpanded ? "expanded" : ""}`}>
        <Link to='/home' onClick={closeNavbar} >Home</Link>
        {!isProjectPage && (
            <>
            <a href="#skills" onClick={closeNavbar} className="nav_link">Skills</a>
        <a href="#about" onClick={closeNavbar} className="nav_link">About Me</a>
        <a href="#projects" onClick={closeNavbar} className="nav_link">Projects</a>
        <a href="#tutorials" onClick={closeNavbar} className="nav_link">Tutorials</a>
            </>
        )}
    </div>
    {/* <div className='nav-social'>
    <ul className="nav-social">
            <li className="nav-social__item">
                <a className="socail-list__link"
                href="https://www.youtube.com/channel/UCpabSA4KaybPjoxM2b_xAFQ">
                <i className="fa-brands fa-youtube"></i></a>
            </li>
            <li className="nav-social__item">
                <a className="socail-list__link"
                href="https://github.com/ShanelleCodes">
                <i className="fa-brands fa-github"></i></a>
            </li>
            <li className="nav-social__item">
                <a className="socail-list__link"
                href="https://www.linkedin.com/in/shanelle-haye/">
                <i className="fa-brands fa-linkedin"></i></a>
            </li>
        </ul>
    </div> */}
   </nav>
  )
}

