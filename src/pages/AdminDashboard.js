import React from "react";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBullseye } from '@fortawesome/free-solid-svg-icons';
import Attendance from "./Attendance";
import PendingTrainingRequestPage from "../pages/PendingTrainingRequestPage";
import PendingTrainingSubmissionPage from "../pages/PendingTrainingSubmissionPage";
function AdminDashboard(){

    return(
        <>
            <Navigationbar/>
            <h2 style={{ marginBottom: "30px", textAlign: "center", color: "#00474e" }}>Admin Dashboard</h2>
            <div className="container" style={{ paddingTop: '80px', paddingLeft:"80px", paddingRight:"80px" }}> 
                <Attendance/>
                <hr style={{marginTop:"40px"}}/>
                <PendingTrainingRequestPage/>
                <hr/>
                <PendingTrainingSubmissionPage/>
            </div>
            <Footer/>
        </>
    )


};
export default AdminDashboard;