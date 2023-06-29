import React, { useEffect, useState } from 'react';
import '../../styles/styles.css';
import PendingTrainingRequest from './PendingTrainingRequest';
import apiUrl from '../../apiConfig';
import Cookies from 'js-cookie';

const PendingTrainingRequestOverview = () => {
    const [requests, setRequests] = useState([]);
    const token = Cookies.get('token');


    useEffect(() => {
        async function fetchRequestedTrainings() {
            try {
                const response = await fetch(`${apiUrl}/api/skills/training-requests/pending-requests`, {
                    method: "GET",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Method": "*",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch requested trainings');
                }

                const data = await response.json();

                setRequests(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchRequestedTrainings();
    }, []);

    return (
        <>
            <div className='requested-container'>
                {requests.map((trainingRequest, index) => {
                    return (
                        <div key={index}>
                            <PendingTrainingRequest trainingRequest={trainingRequest}/>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default PendingTrainingRequestOverview;