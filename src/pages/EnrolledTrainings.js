import React from 'react';
import Navigationbar from '../components/Navigationbar';
import Training from '../components/Training';

function EnrolledTrainings() {
    return (
        <>
            <Navigationbar />
            <div className='container mt-5'>
                <h2 className="text-center mt-4 mb-5" style={{ color: "#00838f" }}>Enrolled trainings</h2>
                <Training />
            </div>
        </>
    )
}

export default EnrolledTrainings;