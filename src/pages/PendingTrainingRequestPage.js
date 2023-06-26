import Navbar from '../components/Navbar'
import PendingTrainingRequestOverview from '../components/requests/PendingTrainingRequestOverview'

const PendingTrainingRequestPage = () => {


  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <h2 className="text-center mt-4 mb-5" style={{ color: "#00838f" }}>Manage Requested Trainings</h2>
        <PendingTrainingRequestOverview />
      </div>
    </>
  )


}

export default PendingTrainingRequestPage