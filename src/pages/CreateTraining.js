import React from 'react'
import Navigationbar from '../components/Navigationbar'
import CreateTrainingForm from '../components/submissions/CreateTrainingForm'
import Footer from '../components/Footer'

const CreateTraining = () => {
  return (
    <>
    <Navigationbar />
      <div className='container' style={{ paddingTop: '70px' }}>
        <h2 className="text-center mt-4 mb-5" style={{ color: "#00838f" }}>Create Training</h2>
        <CreateTrainingForm />
      </div>
    <Footer/>
    </>
  )
}

export default CreateTraining