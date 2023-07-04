import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { BiUser, BiLogOut } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faCheckCircle, faUsers, faQuestionCircle, faThumbsUp, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import Cookies from 'js-cookie';
import apiUrl from '../apiConfig';
function Navigationbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const isActive = (path) => {
        return location.pathname === path ? "#00474e" : "text-white";
    };


    const handleLogout = (e) => {
        e.preventDefault();
        Cookies.remove('token');
        Cookies.remove('currentuserid');
        window.location.href = '/';
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

    const burgerStyle = {
        marginRight: '10px', // New margin-right style
    };

    const menuLinkStyle = {
        marginLeft: '15px', // New margin-left style
        paddingLeft:'8px'
    }

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = Cookies.get('token');
        axios.get(`${apiUrl}/api/test/admin`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (response.status === 200) {
                setIsAdmin(true);
            }
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <Navbar color="#00838f" light expand="xxl" style={{ backgroundColor: "#00838f", display: 'flex', justifyContent: 'space-between', boxShadow: "0px 4px 8px rgba(0,0,0,0.2)", position: "fixed", width: "100%", zIndex: 100 }}>
            <div className="logo">
                <img src="/navbarlogo72.png" alt="descriptive text" style={{ width: '70%', height: 'auto' }} />
            </div>
            <NavbarToggler onClick={toggle} style={burgerStyle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mx-auto" navbar>
                    <NavItem style={{paddingRight:"10px"}}>
                        <Link to="/home" className={`nav-link ${isActive("/home")}`}style={location.pathname === "/home" ? {...activeStyle, ...menuLinkStyle} : menuLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}><FontAwesomeIcon icon={faHome} className="me-2"/> Home</Link>
                    </NavItem>
                    <NavItem style={{paddingRight:"10px"}}>
                        <Link to="/trainings/browse" className={`nav-link ${isActive("/trainings/browse")}`}style={location.pathname === "/trainings/browse" ? {...activeStyle, ...menuLinkStyle} : menuLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}><FontAwesomeIcon icon={faSearch} className="me-2"/> Trainings</Link>
                    </NavItem>
                    <NavItem style={{paddingRight:"10px"}}>
                        <Link to="/trainings/enrolled" className={`nav-link ${isActive("/trainings/enrolled")}`}style={location.pathname === "/trainings/enrolled" ? {...activeStyle, ...menuLinkStyle} : menuLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}><FontAwesomeIcon icon={faCheckCircle} className="me-2"/> Enrolled</Link>
                    </NavItem>
                    <NavItem style={{paddingRight:"10px"}}>
                        <Link to="/requested" className={`nav-link ${isActive("/requested")}`}style={location.pathname === "/requested" ? {...activeStyle, ...menuLinkStyle} : menuLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}><FontAwesomeIcon icon={faThumbsUp} className="me-2"/> Requested Trainings</Link>
                    </NavItem>
                    <NavItem style={{paddingRight:"10px"}}>
                        <Link to="/about-us" className={`nav-link ${isActive("/about-us")}`} style={location.pathname === "/about-us" ? {...activeStyle, ...menuLinkStyle} : menuLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}><FontAwesomeIcon icon={faUsers} className="me-2"/> About Us</Link>
                    </NavItem>
                    <NavItem style={{paddingRight:"10px"}}>
                        <Link to="/help" className={`nav-link ${isActive("/help")}`} style={location.pathname === "/help" ? {...activeStyle, ...menuLinkStyle} : menuLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}><FontAwesomeIcon icon={faQuestionCircle} className="me-2"/> Help</Link>
                    </NavItem>
                    {isAdmin && <NavItem style={{paddingRight:"10px"}}>
                        <Link to="/admin-dashboard" className={`nav-link ${isActive("/admin-dashboard")}`} style={location.pathname === "/admin-dashboard" ? {...activeStyle, ...menuLinkStyle} : menuLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}><FontAwesomeIcon icon={faTachometerAlt} className="me-2" /> Admin Dashboard</Link>
                    </NavItem>}
                </Nav>
                <Nav className="" navbar>
                    <NavItem>
                        <Link to='/profile' className={`nav-link ${isActive("/profile")} h-100`} style={location.pathname === "/profile" ? {...activeStyle, ...menuLinkStyle} : menuLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}>
                            <BiUser style={{ fontSize: "20px" }} />
                            <span className="me-2" style={{paddingRight: 1, fontSize:"16px"}}> Profile</span>
                        </Link>
                    </NavItem>
                    <NavItem>
                    <Link onClick={handleLogout} className={`nav-link ${isActive("/")} h-100`} style={location.pathname === "/" ? {...activeStyle, ...menuLinkStyle} : menuLinkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseOut={e => e.currentTarget.style.backgroundColor = ''}>
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