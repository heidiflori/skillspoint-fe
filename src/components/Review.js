import { dividerClasses, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import apiUrl from '../apiConfig.js';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Container, Button } from "react-bootstrap";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
function Review({selectedTraining, reviewUpdateTrigger}) {
  
    const token = Cookies.get('token');
    const [reviews, setReviews] = useState([]);
    const [showAll, setShowAll] = useState(false);
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
            <p style={{fontSize:"16px"}}>({reviews.length} Reviews)</p>
        {/* Se afișează toate review-urile dacă `showAll` este true, altfel doar primele 3 */}
        {reviews.slice(0, showAll ? reviews.length : 3).map((review, index) => (
            <Container className="rounded mt-1" style={{backgroundColor:"#F8F8F8" }}>
                    <p style={{fontSize:"16px"}}><FontAwesomeIcon icon={faUser} /> {review.user.username} <Rating value={review.rating} readOnly size="small"/></p>
                    <p>{review.comment}</p>
            </Container>
        ))}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Afișează butonul "Show More" dacă nu toate review-urile sunt afișate */}
            {!showAll && reviews.length > 3 && (
                <Button onClick={() => setShowAll(true)}><FontAwesomeIcon icon={faChevronDown} className="me-2"/> Show More</Button>
            )}
            {/* Afișează butonul "Show Less" dacă toate review-urile sunt afișate */}
            {showAll && (
                <Button onClick={() => setShowAll(false)}><FontAwesomeIcon icon={faChevronUp} className="me-2"/> Show Less</Button>
            )}
        </div>
    </div>
    );
};
export default Review;