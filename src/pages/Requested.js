import React from 'react'
import Navigationbar from '../components/Navigationbar';
import Training from '../components/Training';
import SearchBar from '../components/SearchBar';
import { Button } from '@mui/material';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Requested() {
    return (
        <>
            <Navigationbar />
            <div className='container mt-5'>
                <h2 className="text-center mt-4" style={{ color: "#00474e" }}>Requested trainings</h2>
                <div className="d-flex flex-column align-items-end mb-5">
                    <Link to="/request-training">
                        <Button style={{color: "#00838f"}}>Request training</Button>
                    </Link>
                </div>
                <Training />
            </div>
            <Footer />
        </>
    )
}

export default Requested;