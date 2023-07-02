import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  const linkStyle = {
    color: '#535353',
    marginRight: '10px',
    marginLeft: '10px',
    textDecoration: 'none',
    transition: 'color 0.1s ease-in-out, background-color 0.1s ease-in-out'
  };

  const hoverStyle = {
    color: '#101010', // alegem o altă culoare pentru hover (în exemplu, roșu)
  };
  
  return (
    <footer className="footer mt-4 py-3 text-center" style={{ backgroundColor: '#f1f1f1' }}>
      <div className="container d-flex align-items-center justify-content-center w-100 mt-1 mb-4">
        <Link to="/about-us" className="footer-link" style={linkStyle} onMouseOver={e => Object.assign(e.target.style, hoverStyle)} onMouseOut={e => Object.assign(e.target.style, linkStyle)}>About Us</Link>
        <span className="footer-divider"></span>
        <Link to="/help" className="footer-link" style={linkStyle} onMouseOver={e => Object.assign(e.target.style, hoverStyle)} onMouseOut={e => Object.assign(e.target.style, linkStyle)}>Help</Link>
      </div>
      <div className="container d-flex align-items-center justify-content-center w-100 mb-2">
        <span className="text-muted">DBCloudSchool - Team 7 - SkillMaster</span>
      </div>
      
      <div className="container d-flex align-items-center justify-content-center w-50 mt-4">
        <img src="https://storage.googleapis.com/skillspoint-images/app-logo-more.png" alt="Logo More" />
      </div>
    </footer>
  );
}

export default Footer;

