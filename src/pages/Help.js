import React from "react";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import { useEffect, useState} from 'react';

function AboutUs(){

    return(
        <>
            <Navigationbar/>

            <div className="container" style={{ paddingTop: '80px', paddingLeft:"80px", paddingRight:"80px" }}> 

                <div className="container mt-2 mb-2" style={{display:"flex", justifyContent:"center"}}>
                    <h2>Help Page</h2>
                </div>

                <div className="section">
                    <h3>General Help</h3>
                    <p style={{fontSize:19, textAlign:"justify"}}>General Help placeholder</p>
                </div>

                <div className="section">
                    <h3>FAQ</h3>
                    <h5>(Frequently Asked Questions)</h5>
                    <p style={{fontSize:19, textAlign:"justify"}}>FAQ placeholder</p>
                </div>


            </div>
            <Footer/>
        </>
    )


};
export default AboutUs;