import React from "react";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBullseye } from '@fortawesome/free-solid-svg-icons';
import Attendance from "./Attendance";
import PendingTrainingRequestPage from "../pages/PendingTrainingRequestPage";


function AdminDashboard(){

    return(
        <>
            <Navigationbar/>
            <div className="container" style={{ paddingTop: '80px', paddingLeft:"80px", paddingRight:"80px" }}> 
                <Attendance/>
                <hr style={{marginTop:"40px"}}/>
                <PendingTrainingRequestPage/>
                <hr/>

            </div>
            <Footer/>
        </>
    )


};
export default AdminDashboard;