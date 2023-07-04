import React, { useEffect, useState } from 'react';
import '../../styles/styles.css';
import PendingTrainingSubmission from './PendingTrainingSubmission';
import apiUrl from '../../apiConfig';
import Cookies from 'js-cookie';

const PendingTrainingSubmissionOverview = () => {
    const [submissions, setSubmissions] = useState([]);
    const token = Cookies.get('token');


    useEffect(() => {
        async function fetchSubmissionedTrainings() {
            try {
                const response = await fetch(`${apiUrl}/api/skills/trainings/pending-trainings`, {
                    method: "GET",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch requested trainings');
                }

                const data = await response.json();

                setSubmissions(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchSubmissionedTrainings();
    }, [token]);

    return (
        <>
            <div className='requested-container'>
                {submissions.map((trainingSubmission, index) => {
                    return (
                        <div key={index}>
                            <PendingTrainingSubmission trainingSubmission={trainingSubmission}/>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default PendingTrainingSubmissionOverview;