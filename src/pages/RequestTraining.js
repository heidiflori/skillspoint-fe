import React from 'react'
import Navbar from '../components/Navbar'
import TrainingRequestForm from '../components/requests/TrainingRequestForm'

const RequestTraining = () => {
    return (
        <>
            <Navbar />
            <div className='container mt-5'>
                <h2 className="text-center mt-4 mb-5" style={{ color: "#00838f" }}>Request Training</h2>
                <TrainingRequestForm />
            </div>
        </>
    )
}

export default RequestTraining