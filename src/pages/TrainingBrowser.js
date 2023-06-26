import React from "react";
import Navigationbar from "../components/Navigationbar";
import SearchBar from "../components/SearchBar";
import Training from "../components/Training";
import { Button } from "@mui/material";
import Footer from "../components/Footer";

function TrainingBrowser() {
    return (
        <>
            <Navigationbar />
            <SearchBar />
            <div className="container mt-4">
                    <h2 className="text-center mt-4"  style={{color: "#00474e"}}>Browse trainings</h2>
                    <div className="d-flex flex-column align-items-end mb-5">
                        <Button style={{color: "#00474e"}}>Create training</Button>
                        <Button style={{color: "#00474e"}}>Request training</Button>
                    </div>
                <Training />
            </div>
            <Footer />
        </>
    )
}

export default TrainingBrowser;