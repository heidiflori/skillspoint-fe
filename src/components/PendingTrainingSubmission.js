import React from 'react'
import apiUrl from '../apiConfig';
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
            <p className="card-text">From: {trainingSubmission.trainer}</p>
            <p className="card-text"><span className='modal-span'><FontAwesomeIcon icon={faQuoteLeft} className="me-2" />Description: </span>{trainingSubmission.description}</p>
            <p className="card-text">{trainingSubmission.startingDate}</p>
            <p className="card-text">{trainingSubmission.duration}</p>
            <p className="card-text">{trainingSubmission.maximumSlots}</p>
            <p className="card-text">{trainingSubmission.type}</p>

            <div className="buttons-section">
                <button className="btn btn-primary" type='submit' onClick={handleSubmitApprove}>Approve</button>
                <button className="btn btn-secondary" type='submit' onClick={handleSubmitDecline}>Decline</button>
            </div>
        </div>
  )
}

export default PendingTrainingSubmission;