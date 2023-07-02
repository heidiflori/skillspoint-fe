import React from "react";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import { useEffect, useState} from 'react';

function AboutUs(){

    return(
        <>
            <Navigationbar/>

            <div className="container" style={{ paddingTop: '80px', paddingLeft:"80px", paddingRight:"80px" }}> 
                

                <div className="container d-flex align-items-center justify-content-center w-50 mt-2 mb-4">
                    <img src="https://storage.googleapis.com/skillspoint-images/aboutus-img.png" alt="Logo More" style={{ width: '120%', height: 'auto' }}/>
                </div>

                <div className="container mt-1 mb-2" style={{display:"flex", justifyContent:"center"}}>
                    <h2>About Us</h2>
                </div>

                <div className="section">
                    <p style={{fontSize:19, textAlign:"justify"}}>&nbsp;&nbsp;&nbsp;&nbsp;Welcome to SkillMaster, the team 7 of DB Cloud School 2023. We are a dedicated group of passionate individuals committed to providing high-quality learning experiences. With a diverse range of skills and expertise, we strive to empower learners and enhance their skills in the ever-evolving world of technology. Join us on this exciting journey of growth and knowledge!</p>
                </div>
                <div className="section">
                    <h3>Our Mission</h3>
                    <p style={{fontSize:19, textAlign:"justify"}}>&nbsp;&nbsp;&nbsp;&nbsp;At SkillsPoint, our mission is to provide a dynamic learning platform where users can both teach and participate in courses taught by other trainers. We believe in fostering a community that empowers individuals to share their knowledge and expertise, while also offering opportunities for continuous learning and personal growth. By connecting trainers and learners from diverse backgrounds, we aim to create an inclusive environment that promotes collaboration, skill development, and the exchange of ideas. Together, we strive to unlock the full potential of every individual, making education accessible and engaging for all.</p>
                </div>
                <div className="section">
                    <h3>Our Team</h3>
                    <p style={{fontSize:19, textAlign:"justify"}}>&nbsp;&nbsp;&nbsp;&nbsp;Meet the talented individuals behind SkillsPoint. With a combined expertise in software development, quality assurance, business analysis, and mentoring, our team of 11 individuals is dedicated to delivering the best learning experience to our users.</p>
                </div>
                <div className="container mt-5">
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="card card-custom m-2">
                            <div className="card-body text-center">
                                <img className="card-img-top" src="url_to_your_image" alt="Card image" />
                                <h5 className="card-title">Laura</h5>
                                <hr/>
                                <p className="card-text" style={{fontWeight:"bold"}}>BA</p>
                            </div>
                        </div>
                        <div className="card card-custom m-2">
                            <div className="card-body text-center">
                            <img className="card-img-top" src="url_to_your_image" alt="Card image" />
                                <h5 className="card-title">Irina</h5>
                                <hr/>
                                <p className="card-text" style={{fontWeight:"bold"}}>QA</p>
                            </div>
                        </div>
                        <div className="card card-custom m-2">
                            <div className="card-body text-center">
                            <img className="card-img-top" src="url_to_your_image" alt="Card image" />
                                <h5 className="card-title">Mihai</h5>
                                <hr/>
                                <p className="card-text" style={{fontWeight:"bold"}}>DEV</p>
                            </div>
                        </div>
                        <div className="card card-custom m-2">
                            <div className="card-body text-center">
                            <img className="card-img-top" src="url_to_your_image" alt="Card image" />
                                <h5 className="card-title">Heidi</h5>
                                <hr/>
                                <p className="card-text" style={{fontWeight:"bold"}}>DEV</p>
                            </div>
                        </div>
                        <div className="card card-custom m-2">
                            <div className="card-body text-center">
                            <img className="card-img-top" src="url_to_your_image" alt="Card image" />
                                <h5 className="card-title">Mihai</h5>
                                <hr/>
                                <p className="card-text" style={{fontWeight:"bold"}}>DEV</p>
                            </div>
                        </div>
                        <div className="card card-custom m-2">
                            <div className="card-body text-center">
                            <img className="card-img-top" src="url_to_your_image" alt="Card image" />
                                <h5 className="card-title">Andrei</h5>
                                <hr/>
                                <p className="card-text" style={{fontWeight:"bold"}}>DEV</p>
                            </div>
                        </div>
                        <div className="card card-custom m-2">
                            <div className="card-body text-center">
                            <img className="card-img-top" src="url_to_your_image" alt="Card image" />
                                <h5 className="card-title">Paul</h5>
                                <hr/>
                                <p className="card-text" style={{fontWeight:"bold"}}>DEV</p>
                            </div>
                        </div>
                        <div className="card card-custom m-2">
                            <div className="card-body text-center">
                            <img className="card-img-top" src="url_to_your_image" alt="Card image" />
                                <h5 className="card-title">Beatrice</h5>
                                <hr/>
                                <p className="card-text" style={{fontWeight:"bold"}}>BA</p>
                            </div>
                        </div>
                        <div className="card card-custom m-2">
                            <div className="card-body text-center">
                            <img className="card-img-top" src="url_to_your_image" alt="Card image" />
                                <h5 className="card-title">Andu</h5>
                                <hr/>
                                <p className="card-text" style={{fontWeight:"bold"}}>DEV</p>
                            </div>
                        </div>
                        <div className="card card-custom m-2">
                            <div className="card-body text-center">
                            <img className="card-img-top" src="url_to_your_image" alt="Card image" />
                                <h5 className="card-title">Alex</h5>
                                <hr/>
                                <p className="card-text" style={{fontWeight:"bold"}}>DEV</p>
                            </div>
                        </div>
                        <div className="card card-custom m-2">
                            <div className="card-body text-center">
                            <img className="card-img-top" src="url_to_your_image" alt="Card image" />
                                <h5 className="card-title">Claudiu</h5>
                                <hr/>
                                <p className="card-text" style={{fontWeight:"bold"}}>QA</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer/>
        </>
    )


};
export default AboutUs;