import React from 'react'
import apiUrl from '../../apiConfig';
import Cookies from 'js-cookie';


const PendingTrainingRequest = ({ trainingRequest }) => {

    const token = Cookies.get('token');

    const handleSubmitApprove = async (event) => {
        event.preventDefault();

        // const path = `http://localhost:3001/requests/${trainingRequest.id}`;
        const path = `${apiUrl}/requests/${trainingRequest.id}`;
        // const path = `${apiUrl}/requests/pending-trainings`;

        const body = {
            ...trainingRequest,
            adminApproval: "approved"
        }
        const response = await fetch(path, {
            method: "PUT",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body),
        })
    };

    const handleSubmitDecline = async (event) => {
        event.preventDefault();

        const path = "http://localhost:3001/declined";

        const response = await fetch(path, {
            method: "DELETE",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        })
    };
    
    return (
        <div className='requested-training-card'>
            <h3 className="card-title">{trainingRequest.title} </h3>
            <p className="card-text">from {trainingRequest.user}</p>
            <p className="card-text">{trainingRequest.description}</p>

            <div className="buttons-section">
                <button className="btn btn-primary" type='submit' onClick={handleSubmitApprove}>Approve</button>
                <button className="btn btn-secondary" type='submit' onClick={handleSubmitDecline}>Decline</button>
            </div>
        </div>
  )
}

export default PendingTrainingRequest