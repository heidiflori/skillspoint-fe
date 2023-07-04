import React from "react";
import Navigationbar from "../components/Navigationbar";
import SearchBar from "../components/SearchBar";
import Training from "../components/Training";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// import apiUrl from "../apiConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";

function TrainingBrowser() {
    return (
        <>
            <Navigationbar />
            <div className='container' style={{ paddingTop: '70px' }}>
                <h2 className="text-center mt-4"  style={{color: "#00474e"}}>Browse trainings</h2>
                
                        <div className="d-flex flex-column align-items-end mb-5">
                            <Link to="/create-training">
                                <Button style={{color: "#00838f"}}><FontAwesomeIcon icon={faPlusSquare} className="me-2"/>Create training</Button>
                            </Link>
                            <Link to="/request-training">
                                <Button style={{color: "#00838f"}}><FontAwesomeIcon icon={faHandPaper} className="me-2"/>Request training</Button>
                            </Link>
                        </div>
                    <Training />
            </div>
            <Footer />
        </>
    )
}

export default TrainingBrowser;