import React from 'react'
import apiUrl from '../../apiConfig';
import Cookies from 'js-cookie';
import { faClock, faUserTie, faChalkboardTeacher, faStar, faTags, faList, faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare, faCalendar, faCircle, faQuoteLeft, faInfo } from '@fortawesome/free-solid-svg-icons';


const PendingTrainingSubmission = ({ trainingSubmission }) => {

    const token = Cookies.get('token');
    

    const handleSubmitApprove = async (event) => {
        event.preventDefault();

        const path = `${apiUrl}/api/skills/trainings/approve/${trainingSubmission.id}`;

        const body = {
            ...trainingSubmission
        }

        const response = await fetch(path, {
            method: "PUT",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            // body: JSON.stringify(body),
        })
    };

    const handleSubmitDecline = async (event) => {
        event.preventDefault();

        const path = `${apiUrl}/api/skills/trainings/delete/${trainingSubmission.id}`;

        const body = {
            ...trainingSubmission
        }

        const response = await fetch(path, {
            method: "DELETE",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
    };
    
    return (
        <div className='requested-training-card'>
            <h3 className="card-title">{trainingSubmission.title} </h3>
            <hr></hr>
            <p className="card-text"><span className="modal-span"><FontAwesomeIcon icon={faUserTie} className="me-2" />From: </span> {trainingSubmission.trainer}</p>
            <p className="card-text"><span className='modal-span'><FontAwesomeIcon icon={faQuoteLeft} className="me-2" />Description: </span>{trainingSubmission.description}</p>
            <p className="card-text"><span className="modal-span"><FontAwesomeIcon icon={faCalendar} className="me-2" />Starting date: </span>{trainingSubmission.startingDate?.slice(0, 10)}</p>
            <p className="card-text"><span className="modal-span"><FontAwesomeIcon icon={faClock} className="me-2" />Duration: </span>{trainingSubmission.duration} hours</p>
            <p className="card-text"><span className="modal-span"><FontAwesomeIcon icon={faCheckSquare} className="me-2" />Available slots: </span>{trainingSubmission.maximumSlots}</p>
            <p className="card-text"><span className="modal-span"><FontAwesomeIcon icon={faStream} className="me-2" />Type: </span>{trainingSubmission.type}</p>

            <div className="buttons-section">
                <button className="btn btn-primary" type='submit' onClick={handleSubmitApprove}>Approve</button>
                <button className="btn btn-secondary" type='submit' onClick={handleSubmitDecline}>Decline</button>
            </div>
        </div>
  )
}

export default PendingTrainingSubmission;