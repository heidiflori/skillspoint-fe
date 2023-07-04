import React from 'react'
import { useState, useEffect } from "react";
import apiUrl from '../../apiConfig';
import Cookies from 'js-cookie';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import { Snackbar } from "@mui/material";

const PendingTrainingRequest = ({ trainingRequest }) => {

    const token = Cookies.get('token');
    const [showConfirmationApproval, setShowConfirmationApproval] = useState(false);
    const [showConfirmationDecline, setShowConfirmationDecline] = useState(false);
    

    const handleSubmitApprove = async (event) => {
        event.preventDefault();

        const path = `${apiUrl}/api/skills/training-requests/approve/${trainingRequest.id}`;

        const body = {
            ...trainingRequest
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
        setShowConfirmationApproval(true);
    };

    const handleSubmitDecline = async (event) => {
        event.preventDefault();

        const path = `${apiUrl}/api/skills/training-requests/delete/${trainingRequest.id}`;

        const body = {
            ...trainingRequest
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
        setShowConfirmationDecline(true);
    };

    const handleApprovalSnackbarClose = () => {
        setShowConfirmationApproval(false);
    }

    const handleDeclineSnackbarClose = () => {
        setShowConfirmationDecline(false);
    }
    
    return (
        <div className='requested-training-card'>
            <h3 className="card-title">{trainingRequest.title} </h3>
            <hr></hr>
            <p className="card-text"><span className="modal-span"><FontAwesomeIcon icon={faUserTie} className="me-2" />From: </span>{trainingRequest.user.username}</p>
            <p className="card-text"><span className='modal-span'><FontAwesomeIcon icon={faQuoteLeft} className="me-2" />Description: </span>{trainingRequest.description}</p>

            <div className="buttons-section">
                <button className="btn btn-primary" type='submit' onClick={handleSubmitApprove}>Approve</button>
                <button className="btn btn-secondary" type='submit' onClick={handleSubmitDecline}>Decline</button>
            </div>
            {showConfirmationApproval && (
            <Snackbar
              open={showConfirmationApproval}
              onClose={handleApprovalSnackbarClose}
              message="Training request approved."
              ContentProps={{
                sx: {
                    backgroundColor: '#43A047',
                    color: '#FFF',
                }
            }}
            />
          )}
    
          {showConfirmationDecline && (
            <Snackbar
              open={showConfirmationDecline}
              onClose={handleDeclineSnackbarClose}
              message="Training request declined."
              ContentProps={{
                sx: {
                    backgroundColor: '#43A047',
                    color: '#FFF',
                }
            }}
            />
          )}
        </div>

  )
}

export default PendingTrainingRequest;