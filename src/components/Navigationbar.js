import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
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

    return (
        <Navbar color="#00838f" light expand="md" style={{ backgroundColor: "#00838f" }}>
            <div className="logo">
                <img src="/navbarlogo72.png" alt="descriptive text" style={{ width: '70%', height: 'auto' }} />
            </div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/home" className={`nav-link ${isActive("/home")}`}style={location.pathname === "/home" ? activeStyle : null}><FontAwesomeIcon icon={faHome} className="me-2"/>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/trainings/browse" className={`nav-link ${isActive("/trainings/browse")}`}style={location.pathname === "/trainings/browse" ? activeStyle : null}><FontAwesomeIcon icon={faSearch} className="me-2"/>Trainings</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/trainings/enrolled" className={`nav-link ${isActive("/trainings/enrolled")}`}style={location.pathname === "/trainings/enrolled" ? activeStyle : null}><FontAwesomeIcon icon={faCheckCircle} className="me-2"/>Enrolled</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/requested" className={`nav-link ${isActive("/requested")}`}style={location.pathname === "/requested" ? activeStyle : null}><FontAwesomeIcon icon={faStar} className="me-2"/>Requested Trainings</Link>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to='/profile' className={`nav-link ${isActive("/profile")} h-100`}>
                            <BiUser style={{ fontSize: "20px" }} />
                            <span className="me-2" style={{paddingRight: 1, fontSize:"16px"}}>Profile</span>
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Navigationbar;