import React from 'react'
import Navbar from '../components/Navbar'
import CreateTrainingForm from '../components/CreateTrainingForm'


const CreateTraining = () => {
  return (
    <>
    <Navbar /><div className='container mt-5'>
          <h2 className="text-center mt-4 mb-5" style={{ color: "#00838f" }}>Create Training</h2>
          <CreateTrainingForm />
      </div>
      </>
  )
}

export default CreateTraining