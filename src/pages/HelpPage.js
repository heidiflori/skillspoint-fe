import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navigationbar from '../components/Navigationbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faQuestion } from '@fortawesome/free-solid-svg-icons';


function HelpPage() {
    return (
        <>
            <Navigationbar/>

            <div className="container" style={{ paddingTop: '80px', paddingLeft:"80px", paddingRight:"80px" }}> 
                

                <div className="container mt-2 mb-2" style={{display:"flex", justifyContent:"center"}}>
                    <h2 style={{color: "#00474e"}}>Help Page</h2>
                </div>

                
                <div className="section">
                    <h2>General Help <FontAwesomeIcon icon={faQuestionCircle} className="me-2"/></h2>
                    <p style={{fontSize:20, textAlign:"justify"}}>Welcome to our website! We are here to provide you with assistance and guidance to make the most out of your experience. Whether you are new to our platform or have been with us for a while, we are here to help you navigate through our features and find the information you need.</p>
                    <p style={{fontSize:20, textAlign:"justify"}}>Our website features a user-friendly navigation bar at the top, allowing you to easily access various sections. You can explore the Home page for the latest updates and announcements, browse through our wide range of training programs and courses under Trainings, access the trainings you have already enrolled in and track your progress in the Enrolled Trainings section, and manage your training requests in the Requested Trainings section. Additionally, you can find the Profile and Logout options in the navigation bar for managing your account settings.</p>
                    <p style={{fontSize:20, textAlign:"justify"}}>At the bottom of the page, you will find a footer that provides quick links to other important sections of our website. You can learn more about our organization, our mission, and the dedicated team behind it in the About Us section. If you need further assistance, you can access our comprehensive Help section, where you can find answers to frequently asked questions (FAQs) and get further support.</p>
                    <p style={{fontSize:20, textAlign:"justify"}}>Thank you for choosing our platform. We are here to support you every step of the way!</p>
                </div>

                <div>
                    <h2 className="mb-3 mt-5">FAQ <FontAwesomeIcon icon={faQuestionCircle} className="me-2"/></h2>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={{fontSize:"18px"}}><span className="modal-span">Question 1:</span> How do I view more details for a training?</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{backgroundColor:"#F1F1F1"}}>
                            <Typography ><span className="modal-span">Answer:</span> Click on the desired training to view more details such as description, trainer, duration, start date, available spots, etc.</Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={{fontSize:"18px"}}><span className="modal-span">Question 2:</span> How do I enrol in a training?</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{backgroundColor:"#F1F1F1"}}>
                            <Typography><span className="modal-span">Answer:</span> Click on the desired training and from the newly opened window, click on "Enrol".</Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={{fontSize:"18px"}}><span className="modal-span">Question 3:</span> How can I become a trainer?</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{backgroundColor:"#F1F1F1"}}>
                            <Typography><span className="modal-span">Answer:</span> To become a trainer, select the "Trainings" menu from the top navigation bar and choose "Create Training" on the right side. Fill out the opened form.</Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={{fontSize:"18px"}}><span className="modal-span">Question 4:</span> How do I add a training?</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{backgroundColor:"#F1F1F1"}}>
                            <Typography><span className="modal-span">Answer:</span> To add a training, select the "Trainings" menu from the top navigation bar, then click on "Create Training" on the right side. Fill out the opened form, and your training will be submitted to an admin for verification and acceptance.</Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={{fontSize:"18px"}}><span className="modal-span">Question 5:</span> How do I add course materials?</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{backgroundColor:"#F1F1F1"}}>
                            <Typography><span className="modal-span">Answer:</span> If you already have a training, to add course materials, click on the training, scroll down to the bottom of the opened page, and drag and drop the files you want to upload into the corresponding box.</Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={{fontSize:"18px"}}><span className="modal-span">Question 6:</span> How do I download the course materials for a training?</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{backgroundColor:"#F1F1F1"}}>
                            <Typography><span className="modal-span">Answer:</span> To download course materials for a training, click on the desired training, scroll down to the bottom of the opened window, and click on the corresponding "Download" button for the course material you want to download.</Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={{fontSize:"18px"}}><span className="modal-span">Question 7:</span> How do I leave a review for a course?</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{backgroundColor:"#F1F1F1"}}>
                            <Typography><span className="modal-span">Answer:</span> To leave a review for a training, click on the desired training, scroll down on the opened page, fill out the text box for comments, select a rating using the stars below the box, and click on "Post".</Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography style={{fontSize:"18px"}}><span className="modal-span">Question 8:</span> How can I request a training?</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{backgroundColor:"#F1F1F1"}}>
                            <Typography><span className="modal-span">Answer:</span> To request a training, access "Requested Trainings" from the top navigation bar and click on "Request Training" on the right side. Fill out the opened form and click on "Submit". Your request will be sent to an admin and displayed on the page.</Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* Adaugă mai multe întrebări și răspunsuri aici, folosind aceeași structură de Accordion și AccordionSummary */}
                </div>
                


            </div>
            <Footer/>
        </>
      
    );
  }
  
  export default HelpPage;
  
