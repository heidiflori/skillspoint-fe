import React from 'react'
import Navigationbar from '../components/Navigationbar'
import CreateTrainingForm from '../components/CreateTrainingForm'


const CreateTraining = () => {
  return (
    <>
    <Navigationbar /><div className='container mt-5'>
          <h2 className="text-center mt-4 mb-5" style={{ color: "#00838f" }}>Create Training</h2>
          <CreateTrainingForm />
      </div>
      </>
  )
}

export default CreateTraining