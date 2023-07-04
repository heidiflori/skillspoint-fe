import Navigationbar from '../components/Navigationbar'
import PendingTrainingRequestOverview from '../components/requests/PendingTrainingRequestOverview'
import Footer from '../components/Footer'

const PendingTrainingRequestPage = () => {

  return (
    <>
      <div className='container' style={{ paddingTop: '10px'}}>
        <h2 className="text-center mt-4 mb-5" style={{ color: "#00474e" }}>Manage Requested Trainings</h2>
        <PendingTrainingRequestOverview />
      </div>
      <Footer/>
    </>
  )


}

export default PendingTrainingRequestPage