import React from "react";
import { Modal, Button, Container } from "react-bootstrap";
import { ModalBody } from "reactstrap";
import Cookies from 'js-cookie';
import apiUrl from '../apiConfig';
import { Link } from "react-router-dom"



function TrainingDetailsModal ({show, onClose, selectedTraining}){

    const token = Cookies.get('token');
    const currentUserId = Cookies?.get("currentuserid");
    const trainingId = selectedTraining?.id;
    const url = `${apiUrl}/api/skills/enrolled-users/enrol`;

    const handleEnrolClick = () => {

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                user: { id:currentUserId },
                training: { id:trainingId }
            }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        }).catch(err => {
            console.log(err.message);
        });
        
    };

    return (
        <Modal show = {show} onHide={onClose} centered size="lg">
            <Modal.Body>
                {
                    selectedTraining && (<div>
                        <h2>{selectedTraining.title}</h2>
                        <p><span className = "modal-span">Trainer:</span> {selectedTraining.trainer}</p>
                        <p><span className = "modal-span">Description:</span> {selectedTraining.description}</p>
                        <p><span className = "modal-span">Duration:</span> {selectedTraining.duration} hours</p>
                        <p><span className = "modal-span">Starting date:</span> {selectedTraining.startingDate}</p>
                        <p><span className = "modal-span">Type:</span> {selectedTraining.type}</p>
                        <p><span className = "modal-span">Available slots:</span> {selectedTraining.maximumSlots-selectedTraining.occupiedSlots}/{selectedTraining.maximumSlots}</p>
                        <Container className = "d-flex justify-content-center">
                            <Button onClick={() => handleEnrolClick()}>
                                <Link to="/trainings/enrolled" style={{color:'white', textDecoration:'none'}}>Enrol</Link>
                            </Button>
                        </Container>
                    </div>)
                }
            </Modal.Body>
        </Modal>
    );
}

export default TrainingDetailsModal;