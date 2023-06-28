import React from "react";
import { Modal, Button, Container } from "react-bootstrap";
import { ModalBody } from "reactstrap";
import Cookies from 'js-cookie';
import apiUrl from '../apiConfig';
import { Link } from "react-router-dom"
import { faClock, faCheckSquare, faUserTie, faCalendar, faCircle, faQuoteLeft, faInfo, faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';

function TrainingDetailsModal ({show, onClose, selectedTraining}){

    const token = Cookies.get('token');
    const currentUserId = Cookies?.get("currentuserid");
    const trainingId = selectedTraining?.id;
    const url = `${apiUrl}/api/skills/enrolled-users/enrol`;

    const statusColor = {
        deleted: '#dc3545',
        upcoming: '#28a745',
        ongoing: '#ffc107',
    };

    const iconStyle = {
        color: statusColor[selectedTraining?.status] || 'black', 
    };

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
                        <p><span className = "modal-span"><FontAwesomeIcon icon={faCircle} className="me-2" style={iconStyle}/>Status:</span> {selectedTraining.status}</p>
                        <hr></hr>
                        <p><span className = "modal-span"><FontAwesomeIcon icon={faUserTie} className="me-2"/>Trainer:</span> {selectedTraining.trainer}</p>
                        <p><span className = "modal-span"><FontAwesomeIcon icon={faQuoteLeft} className="me-2"/>Description:</span> {selectedTraining.description}</p>
                        <p><span className = "modal-span"><FontAwesomeIcon icon={faClock} className="me-2"/>Duration:</span> {selectedTraining.duration} hours</p>
                        <p><span className = "modal-span"><FontAwesomeIcon icon={faCalendar} className="me-2"/>Starting date:</span> {selectedTraining.startingDate}</p>
                        <p><span className = "modal-span"><FontAwesomeIcon icon={faStream} className="me-2"/>Type:</span> {selectedTraining.type}</p>
                        <p><span className = "modal-span"><FontAwesomeIcon icon={faCheckSquare} className="me-2"/>Available slots:</span> {selectedTraining.maximumSlots-selectedTraining.occupiedSlots}/{selectedTraining.maximumSlots}</p>
                        <Container className = "d-flex justify-content-center">
                            <Button onClick={() => handleEnrolClick()}>
                                <FontAwesomeIcon icon={faUserCheck} className="me-2"/>Enrol
                            </Button>
                        </Container>
                    </div>)
                }
            </Modal.Body>
        </Modal>
    );
}

export default TrainingDetailsModal;