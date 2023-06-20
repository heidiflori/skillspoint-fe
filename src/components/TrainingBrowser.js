import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Training from "./Training";
import { Button } from "@mui/material";

function TrainingBrowser() {
    return (
        <>
            <Navbar />
            <SearchBar />
            <div className="container mt-4">
                    <h2 className="text-center mt-4"  style={{color: "#00838f"}}>Browse trainings</h2>
                    <div className="d-flex flex-column align-items-end mb-5">
                        <Button style={{color: "#00838f"}}>Create training</Button>
                        <Button style={{color: "#00838f"}}>Request training</Button>
                    </div>
                <Training />
            </div>
        </>
    )
}

export default TrainingBrowser;