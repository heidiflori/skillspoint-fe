import React, { useEffect, useState } from 'react';
import apiUrl from '../apiConfig.js';
import Cookies from 'js-cookie';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';




function Requests() {
    const [trainings, setTrainings] = useState([]);
    const [visibleTrainings, setVisibleTrainings] = useState(6);
    const [showLessVisible, setShowLessVisible] = useState(false);

    const token = Cookies.get('token');

    const fetchTrainings = async () => {
        try {
          const token = Cookies.get('token');
          const response = await fetch(apiUrl + '/api/skills/training-requests/approved-requests', {
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

    const showMoreTrainings = () => {
        setVisibleTrainings((prevVisibleTrainings) => prevVisibleTrainings + 6);
        setShowLessVisible(true);
    };

    const showLessTrainings = () => {
        setVisibleTrainings(6);
        setShowLessVisible(false);
    };

    const handleLike = async (event, requestId) => {
        event.preventDefault();
        // const body = {}

        const path = `${apiUrl}/api/skills/training-requests/like/${requestId}`;
        
        const response = await fetch(path, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            // body: JSON.stringify(body),
        });
        if (response.ok) {
            // Like operation successful, fetch the updated list of trainings
            fetchTrainings();
          } else {
            // Handle the error if needed
            console.error("Failed to like the training request");
          }
    }
    

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {trainings.slice(0, visibleTrainings).map((training, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card h-100 d-flex flex-column">
                            <div className="card-body">
                                <h3 className="card-title">{training.title}</h3>
                                <p className="card-text">Description: {training.description}</p>
                                <p className="card-text">Likes: {training.likesCounter}</p>
                                <button className='btn btn-primary button-like' type="submit" onClick={(event) => handleLike(event, training.id)}>
                                    <FontAwesomeIcon icon={faThumbsUp} className="me-2"/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleTrainings < trainings.length && !showLessVisible ? (
                <div className="text-center mt-4 mb-5">
                    <button className="btn btn-secondary" onClick={showMoreTrainings}>
                        Show More
                    </button>
                </div>
            ) : null}
            {showLessVisible ? (
                <div className="text-center mt-4 mb-5">
                    <button className="btn btn-secondary" onClick={showLessTrainings}>
                        Show Less
                    </button>
                </div>
            ) : null}
        </div>
    );
}

export default Requests;
