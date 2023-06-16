import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiUser } from 'react-icons/bi';

function Navbar() {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? "font-weight-bold text-black" : "text-white";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#00838f" }}>
            <div className="container">
                <ul className="navbar-nav mx-auto" style={{fontSize: "1.1rem"}}>
                    <li className="nav-item" style={{paddingRight: 10}}>
                        <Link to="/home" className={`nav-link ${isActive("/home")}`}>Home</Link>
                    </li>
                    <li className="nav-item" style={{paddingRight: 10}}>
                        <Link to="/trainings/browse" className={`nav-link ${isActive("/trainings/browse")}`}>Browse trainings</Link>
                    </li>
                    <li className="nav-item" style={{paddingRight: 10}}>
                        <Link to="/trainings/enrolled" className={`nav-link ${isActive("/trainings/enrolled")}`}>Enrolled</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mytrainings" className={`nav-link ${isActive("/mytrainings")}`}>My trainings</Link>
                    </li>
                </ul>
            </div>
            <ul className="navbar-nav ms-auto" >
                <li className="nav-item">
                    <Link to='/profile' className={`nav-link ${isActive("/profile")} h-100`}>
                        <span className="me-2">Profile</span>
                        <BiUser style={{ fontSize: "1.5rem" }} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
