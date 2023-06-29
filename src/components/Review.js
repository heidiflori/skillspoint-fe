import { dividerClasses, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import apiUrl from '../apiConfig.js';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Container } from "react-bootstrap";

function Review({selectedTraining, reviewUpdateTrigger}) {
  
    const token = Cookies.get('token');
    const [reviews, setReviews] = useState([]);
    const trainingId = selectedTraining?.id;

    useEffect(() => {
        async function fetchReviews() {
            try {
                const token = Cookies.get('token'); // preia tokenul
                const response = await fetch(`${apiUrl}/api/skills/reviews/training/${trainingId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}` // adauga tokenul in header
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();
                console.log(data);
                setReviews(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchReviews();
    }, [token, reviewUpdateTrigger]);


    return (
        <div>
            {reviews.map((review, index) => (
                <Container>
                    <div>
                        <p><FontAwesomeIcon icon={faUser} /> {review.user.username}</p>
                        <p><Rating
                            value={review.rating}
                            readOnly
                            size="small"
                        /></p>
                        <p>{review.comment}</p>
                    </div>
                </Container>
            ))}
        </div>
    );
};
export default Review;