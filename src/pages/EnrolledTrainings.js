import React, {useState, useEffect} from 'react';
import Navigationbar from '../components/Navigationbar';
import Footer from "../components/Footer";
import Cookies from 'js-cookie';
import apiUrl from '../apiConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStream, faUserTie } from '@fortawesome/free-solid-svg-icons';


function EnrolledTrainings() {

    const [trainings, setTrainings] = useState([]);

    const token = Cookies.get('token');
    const userId = Cookies?.get("currentuserid");

    console.log(userId);
    const fetchTrainings = async () => {
        try {
          const token = Cookies.get('token');
          const response = await fetch(`${apiUrl}/api/skills/enrolled-users/${userId}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (!response.ok) {
            throw new Error('Failed to fetch trainings');
          }
          const data = await response.json();
          console.log(data);
          setTrainings(data);
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
        fetchTrainings();
    }, [token]);

    return (
        <>
            <Navigationbar />
            <div className='container' style={{ paddingTop: '70px' }}>
                <h2 className="text-center mt-4 mb-5" style={{ color: "#00474e" }}>Enrolled trainings</h2>
                {/* <Training /> */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {
                        trainings.map((training, index) => (
                            <div key={index} className="col mb-4">
                            <div className="card h-100 d-flex flex-column">
                                <div className="card-body">
                                    <h5 className="card-title" style={{fontWeight:"bold"}}>{training.training.title}</h5>
                                    <hr style={{color:"#BDBDBD"}}></hr>
                                    <p className="card-text"><span className='modal-span'><FontAwesomeIcon icon={faUserTie} className="me-2"/>Trainer:</span> {training.training.trainer}</p>
                                    <p className="card-text"><span className='modal-span'><FontAwesomeIcon icon={faStream} className="me-2"/>Type:</span> {training.training.type}</p>
                                    <p className="card-text"><span className='modal-span'><FontAwesomeIcon icon={faClock} className="me-2"/>Duration:</span> {training.training.duration}</p>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EnrolledTrainings;