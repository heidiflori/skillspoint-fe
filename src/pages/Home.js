import React from "react";
import Navigationbar from "../components/Navigationbar";
import Training from "../components/Training";
import '../styles/heading.css';
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navigationbar />
            <div className="container">
                <div className="availabileTrainings">
                    <h3 style={{color: '#00474e', textAlign: 'center', marginTop: 50}}>Slideshow trainings</h3>
                    {/* <Training /> */}
                    <Slideshow />
                </div>
                <div>
                    <h3 style={{color: '#00474e', textAlign: 'center', marginBottom: 50}}>Available trainings</h3>
                    <Training />
                </div>
                <div>
                    <h3 style={{color: '#00474e', textAlign: 'center', marginTop: 30, marginBottom: 50}}>Enrolled trainings</h3>
                    {/* <Training /> */}
                </div>
            </div>         
            <Footer />
        </>
    )
}

export default Home;