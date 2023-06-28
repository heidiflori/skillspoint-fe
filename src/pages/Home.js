import React from "react";
import Navigationbar from "../components/Navigationbar";
import Training from "../components/Training";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navigationbar />
            <div className="container">
                <div className="availabileTrainings">
                    <h3 style={{color: '#00474e', textAlign: 'center', marginTop: 50, marginBottom: 30}}>Most popular trainings</h3>
                    <Slideshow />
                </div>
                <div>
                    <h3 style={{color: '#00474e', textAlign: 'center', marginBottom: 30, marginTop:50}}>Available trainings</h3>
                    <Training />
                </div>
                <div>
                    <h3 style={{color: '#00474e', textAlign: 'center', marginTop: 50, marginBottom: 30}}>Enrolled trainings</h3>
                    {/* <Training /> */}
                </div>
            </div>         
            <Footer />
        </>
    )
}

export default Home;