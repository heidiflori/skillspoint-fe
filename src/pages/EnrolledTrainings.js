import React from 'react';
import Navigationbar from '../components/Navigationbar';
import Training from '../components/Training';
import Footer from "../components/Footer";

function EnrolledTrainings() {
    return (
        <>
            <Navigationbar />
            <div className='container mt-5'>
                <h2 className="text-center mt-4 mb-5" style={{ color: "#00474e" }}>Enrolled trainings</h2>
                <Training />
            </div>
            <Footer />
        </>
    )
}

export default EnrolledTrainings;