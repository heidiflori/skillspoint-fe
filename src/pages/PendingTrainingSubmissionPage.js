import React from 'react'
import PendingTrainingSubmissionOverview from '../components/submissions/PendingTrainingSubmissionOverview'
import Navigationbar from '../components/Navigationbar'
import Footer from '../components/Footer'

const PendingTrainingSubmissionPage = () => {
  return (
    <>
    <Navigationbar />
    <div className='container' style={{ paddingTop: '70px' }}>
      <h2 className="text-center mt-4 mb-5" style={{ color: "#00838f" }}>Manage Submitted Trainings</h2>
      <PendingTrainingSubmissionOverview />
    </div>
    <Footer/>
  </>
  )
}

export default PendingTrainingSubmissionPage