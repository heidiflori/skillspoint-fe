import React from 'react'
import Navbar from '../components/Navbar';
import Training from '../components/Training';
import SearchBar from '../components/SearchBar';
import { Button } from '@mui/material';

function Requested() {
    return (
        <>
            <Navbar />
            <SearchBar />
            <div className='container mt-5'>
                <h2 className="text-center mt-4" style={{ color: "#00838f" }}>Requested trainings</h2>
                <div className="d-flex flex-column align-items-end mb-5">
                        <Button style={{color: "#00838f"}}>Request training</Button>
                    </div>
                <Training />
            </div>
        </>
    )
}

export default Requested;