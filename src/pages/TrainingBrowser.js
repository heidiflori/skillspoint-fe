import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Training from "../components/Training";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function TrainingBrowser() {
    return (
        <>
            <Navbar />
            <SearchBar />
            <div className="container mt-4">
                    <h2 className="text-center mt-4"  style={{color: "#00838f"}}>Browse trainings</h2>
                    <div className="d-flex flex-column align-items-end mb-5">
                        <Link to="/create-training">
                            <Button style={{color: "#00838f"}}>Create training</Button>
                        </Link>
                        <Link to="/request-training">
                            <Button style={{color: "#00838f"}}>Request training</Button>
                        </Link>
                    </div>
                <Training />
            </div>
        </>
    )
}

export default TrainingBrowser;