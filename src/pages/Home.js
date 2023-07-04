import React from "react";
import Navigationbar from "../components/Navigationbar";
import Training from "../components/Training";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import TrainingCalendar from "../components/TrainingCalendar";

function Home() {
    return (
        <>
            <Navigationbar />
            <div className="container" style={{ paddingTop: '50px' }}>
                <div className="availabileTrainings">
                    <h2 style={{color: '#00474e', textAlign: 'center', marginTop: 50, marginBottom: 30}}>Most popular trainings</h2>
                    <Slideshow />
                </div>
                <div>
                    <h2 style={{color: '#00474e', textAlign: 'center', marginBottom: 30, marginTop:50}}>Available trainings</h2>
                    <Training />
                </div>
                <div>
                    <h2 style={{color: '#00474e', textAlign: 'center', marginTop: 50, marginBottom: 30}}>Calendar</h2>
                    <TrainingCalendar/>
                </div>
            </div>           
            <Footer />
        </>
    )
}

export default Home;