import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiUser, BiLogOut } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

function Navigationbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const isActive = (path) => {
        return location.pathname === path ? "#00474e" : "text-white";
    };

    const activeStyle = {
        borderBottom: "3px solid #FFFFFF" 
    };

    const hoverStyle = {
        backgroundColor: "#006064",
        cursor: "pointer",
        borderRadius: '5px',
        transition: 'background-color 0.3s ease-in-out'
        
    };

    const linkStyle = {
        marginLeft: '10px',
    };

    return (
        <Navbar color="#00838f" light expand="md" style={{ backgroundColor: "#00838f", display: 'flex', justifyContent: 'space-between', boxShadow: "0px 4px 8px rgba(0,0,0,0.2)" }}>
            <div className="logo">
                <img src="/navbarlogo72.png" alt="descriptive text" style={{ width: '70%', height: 'auto' }} />
            </div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mx-auto" navbar>
                    <NavItem style={{paddingRight:"10px"}}>
                        <Link to="/home" className={`nav-link ${isActive("/home")}`}style={location.pathname === "/home" ? activeStyle : null} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}><FontAwesomeIcon icon={faHome} className="me-2"/>Home</Link>
                    </NavItem>
                    <NavItem style={{paddingRight:"10px"}}>
                        <Link to="/trainings/browse" className={`nav-link ${isActive("/trainings/browse")}`}style={location.pathname === "/trainings/browse" ? activeStyle : null} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}><FontAwesomeIcon icon={faSearch} className="me-2"/>Trainings</Link>
                    </NavItem>
                    <NavItem style={{paddingRight:"10px"}}>
                        <Link to="/trainings/enrolled" className={`nav-link ${isActive("/trainings/enrolled")}`}style={location.pathname === "/trainings/enrolled" ? activeStyle : null} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}><FontAwesomeIcon icon={faCheckCircle} className="me-2"/>Enrolled</Link>
                    </NavItem>
                    <NavItem style={{paddingRight:"10px"}}>
                        <Link to="/requested" className={`nav-link ${isActive("/requested")}`}style={location.pathname === "/requested" ? activeStyle : null} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}><FontAwesomeIcon icon={faStar} className="me-2"/>Requested Trainings</Link>
                    </NavItem>
                </Nav>
                <Nav className="" navbar>
                    <NavItem>
                        <Link to='/profile' className={`nav-link ${isActive("/profile")} h-100`} style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}>
                            <BiUser style={{ fontSize: "20px" }} />
                            <span className="me-2" style={{paddingRight: 1, fontSize:"16px"}}> Profile</span>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/' className={`nav-link ${isActive("/")} h-100`} style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}>
                            <BiLogOut style={{ fontSize: "20px" }} />
                            <span className="me-2" style={{paddingRight: 1, fontSize:"16px"}}> Logout</span>
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Navigationbar;