import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer'
import Training from "./Training";
import '../styles/heading.css';
import Slideshow from "./Slideshow";

function Home() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="availabileTrainings">
                    <h3 style={{color: '#004d40', textAlign: 'center', marginTop: 50}}>Availabile trainings</h3>
                    {/* <Training /> */}
                    <Slideshow />
                </div>
                <div>
                    <h3 style={{color: '#004d40', textAlign: 'center', marginBottom: 50}}>Enrolled trainings</h3>
                    <Training />
                </div>
                <div>
                    <h3 style={{color: '#004d40', textAlign: 'center', marginTop: 30, marginBottom: 50}}>My trainings</h3>
                    <Training />
                </div>
            </div>         
            {/* <Footer /> */}
        </>
    )
}

export default Home;