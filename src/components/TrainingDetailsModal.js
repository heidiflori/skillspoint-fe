import React, { useState, useEffect } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import { ModalBody } from "reactstrap";
import Cookies from 'js-cookie';
import apiUrl from '../apiConfig';
import { Link } from "react-router-dom"
import { faClock, faCheckSquare, faUserTie, faCalendar, faCircle, faQuoteLeft, faInfo, faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faShare, faComment } from '@fortawesome/free-solid-svg-icons';
import { Rating, TextField, Box, Snackbar } from "@mui/material";
import Review from "./Review";
import FileDownloadComponent from "./FileDownloadComponent";
import FileUploadComponent from "./FileUploadComponent";

function TrainingDetailsModal({ show, onClose, selectedTraining }) {

    const token = Cookies.get('token');
    const currentUserId = Cookies?.get("currentuserid");
    const trainingId = selectedTraining?.id;
    const url = `${apiUrl}/api/skills/enrolled-users/enrol`;
    const [showConfirmation, setShowConfirmation] = useState(false);
    

    const statusColor = {
        completed: '#dc3545',
        upcoming: '#28a745',
        ongoing: '#ffc107',
    };

    const iconStyle = {
        color: statusColor[selectedTraining?.status] || 'black',
    };

    const [input, setInput] = useState({
        rating: "",
        comment: ""
    });

    const [comment, setComment] = React.useState('');
    const [rating, setRating] = React.useState(0);

    const [reviewUpdateTrigger, setReviewUpdateTrigger] = useState(0);

    const handleEnrolClick = () => {

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                user: { id: currentUserId },
                training: { id: trainingId }
            }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        }).catch(err => {
            console.log(err.message);
        });
        setShowConfirmation(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const path = `${apiUrl}/api/skills/reviews/add`;

        const response = await fetch(path, {
            method: "POST",
            body: JSON.stringify({
                rating: rating,
                comment: comment,
                user: { id: currentUserId },
                training: { id: trainingId }
            }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        }).catch(err => {
            console.log(err.message);
        });

        // Clear the comment and reset the rating after the form is submitted
        setComment('');
        setRating(0);
        setReviewUpdateTrigger(reviewUpdateTrigger + 1);
    };

    const handlleCloseSnackbar = () => {
        setShowConfirmation(false);
    }


    return (
        <Modal show={show} onHide={onClose} centered size="lg">
            <Modal.Body>
                {
                    selectedTraining && (<div>
                        <h2>{selectedTraining.title}</h2>
                        <p><span className="modal-span"><FontAwesomeIcon icon={faCircle} className="me-2" style={iconStyle} />Status:</span> {selectedTraining.status}</p>
                        <hr></hr>
                        <p><span className="modal-span"><FontAwesomeIcon icon={faUserTie} className="me-2" />Trainer:</span> {selectedTraining.trainer}</p>
                        <p><span className="modal-span"><FontAwesomeIcon icon={faQuoteLeft} className="me-2" />Description:</span> {selectedTraining.description}</p>
                        <p><span className="modal-span"><FontAwesomeIcon icon={faClock} className="me-2" />Duration:</span> {selectedTraining.duration} hours</p>
                        <p><span className="modal-span"><FontAwesomeIcon icon={faCalendar} className="me-2" />Starting date:</span> {selectedTraining.startingDate?.slice(0, 10)}</p>
                        <p><span className="modal-span"><FontAwesomeIcon icon={faStream} className="me-2" />Type:</span> {selectedTraining.type}</p>
                        <p><span className="modal-span"><FontAwesomeIcon icon={faCheckSquare} className="me-2" />Available slots:</span> {selectedTraining.maximumSlots - selectedTraining.occupiedSlots}/{selectedTraining.maximumSlots}</p>
                        <Container className="d-flex justify-content-center">
                            <Button onClick={() => handleEnrolClick()}>
                                <FontAwesomeIcon icon={faUserCheck} className="me-2" />Enrol
                            </Button>
                        </Container>
                        <hr></hr>

                        <Container className="d-flex justify-content-center flex-column">
                            <TextField
                                label="Add a review"
                                name="comment"
                                value={comment}
                                onChange={event => setComment(event.target.value)}
                            />

                            <Box sx={{ '& > legend': { mt: 2 }, }}>
                                <Rating
                                    name="simple-controlled"
                                    value={rating}
                                    onChange={(event, newRating) => { setRating(newRating) }}
                                />
                            </Box>

                            <Container className="d-flex justify-content-end p-0">
                                <Button type="submit" onClick={handleSubmit}><FontAwesomeIcon icon={faShare} /> POST</Button>
                            </Container>
                        </Container>
                        <h4 className="mt-1">User reviews <FontAwesomeIcon icon={faComment} /></h4>
                        <Review selectedTraining={selectedTraining} reviewUpdateTrigger={reviewUpdateTrigger} />

                        <hr></hr>

                        <h4 className="mt-4 mb-3">Upload materials for this training</h4>
                        <FileUploadComponent trainingId={selectedTraining.id}/>

                        <h4 className="mt-4 mb-3">Download training materials</h4>
                        <FileDownloadComponent trainingId={selectedTraining.id} />




                    </div>)
                }
            </Modal.Body>
            <Snackbar
                open={showConfirmation}
                autoHideDuration={3000}
                onClose={handlleCloseSnackbar}
                message="Enrolled to training!"
                ContentProps={{
                    sx: {
                        backgroundColor: '#43A047',
                        color: '#FFF',
                    }
                }}
            />
        </Modal>
    );
}

export default TrainingDetailsModal;