import React from 'react'
import Navigationbar from '../components/Navigationbar'
import TrainingRequestForm from '../components/requests/TrainingRequestForm'


const RequestTraining = () => {
    return (
        <>
            <Navigationbar />
            <div className='container mt-5'>
                <h2 className="text-center mt-4 mb-5" style={{ color: "#00838f" }}>Request Training</h2>
                <TrainingRequestForm />
            </div>
        </>
    )
}

export default RequestTraining