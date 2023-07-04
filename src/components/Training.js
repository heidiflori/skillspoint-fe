import React, { useEffect, useState } from 'react';
import apiUrl from '../apiConfig.js';
import Cookies from 'js-cookie';
import TrainingDetailsModal from './TrainingDetailsModal.js';
import { faClock, faUserTie, faChalkboardTeacher, faStar, faTags, faList, faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
function Training() {
    const [courses, setCourses] = useState([]);
    const [visibleCourses, setVisibleCourses] = useState(6);
    const [showLessVisible, setShowLessVisible] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [selectTraining, setSelectedTraining] = useState(null);
    

    const token = Cookies.get('token');

    useEffect(() => {
        async function fetchCourses() {
            try {
                const token = Cookies.get('token'); // preia tokenul
                const response = await fetch(apiUrl + '/api/skills/trainings/approved-trainings', {
                    headers: {
                        'Authorization': `Bearer ${token}` // adauga tokenul in header
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data = await response.json();
                console.log(data);
                setCourses(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCourses();
    }, [token]);

    const showMoreCourses = () => {
        setVisibleCourses(courses.length);
    };

    const showLessCourses = () => {
        setVisibleCourses(6);
        setShowLessVisible(false);
    };

    const handleCardClick = (course) => {
        setSelectedTraining(course)
        setShowModal(true)
    }

    const handleClose = () =>{
        setShowModal(false)
        setSelectedTraining(null)
    }

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {courses.slice(0, visibleCourses).map((course, index) => (
                    <div key={index} className="col mb-4" onClick ={() => handleCardClick(course)}>
                        <div className="card h-100 d-flex flex-column">
                            <div className="card-body">
                                <h5 className="card-title" style={{fontWeight:"bold"}}>{course.title}</h5>
                                <hr style={{color:"#BDBDBD"}}></hr>
                                <p className="card-text"><span className='modal-span'><FontAwesomeIcon icon={faUserTie} className="me-2"/>Trainer:</span> {course.trainer}</p>
                                <p className="card-text"><span className='modal-span'><FontAwesomeIcon icon={faStream} className="me-2"/>Type:</span> {course.type}</p>
                                <p className="card-text"><span className='modal-span'><FontAwesomeIcon icon={faClock} className="me-2"/>Duration:</span> {course.duration} hours</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleCourses < courses.length ? (
                <div className="text-center mt-4 mb-5">
                    <button className="btn btn-primary" onClick={showMoreCourses}>
                    <FontAwesomeIcon icon={faChevronDown} className="me-2"/>Show More
                    </button>
                </div>
            ) : null}
            {visibleCourses === courses.length ? (
                <div className="text-center mt-4 mb-5">
                    <button className="btn btn-primary" onClick={showLessCourses}>
                        <FontAwesomeIcon icon={faChevronUp} className="me-2"/>Show Less
                    </button>
                </div>
            ) : null}
            <TrainingDetailsModal show={showModal} onClose = {handleClose} selectedTraining={selectTraining} />
        </div>
    );
}

export default Training;
