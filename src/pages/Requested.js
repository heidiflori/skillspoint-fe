import React from 'react'
import Navigationbar from '../components/Navigationbar';
import Training from '../components/Training';
import SearchBar from '../components/SearchBar';
import { Button } from '@mui/material';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Requests from '../components/Requests'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faHandPaper } from '@fortawesome/free-solid-svg-icons';
function Requested() {
    return (
        <>
            <Navigationbar />
            <div className='container' style={{ paddingTop: '70px' }}>
                <h2 className="text-center mt-4" style={{ color: "#00474e" }}>Requested trainings</h2>
                <div className="d-flex flex-column align-items-end mb-5">
                    <Link to="/request-training">
                        <Button style={{color: "#00838f"}}><FontAwesomeIcon icon={faPlusSquare} className="me-2"/>Request training</Button>
                    </Link>
                </div>
                <Requests />
            </div>
            <Footer />
        </>
    )
}

export default Requested;