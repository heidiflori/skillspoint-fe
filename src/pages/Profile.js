import React from "react";
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";

function Profile() {
    return (
        <>
            <Navigationbar />
            <div className='container' style={{ paddingTop: '100px' }}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card border shadow-sm h-100">
                            <div className="text-center p-3">
                                <img
                                    src="https://community.concur.com/t5/image/serverpage/image-id/609iE93CA14D568A373E/image-size/large/is-moderation-mode/true?v=v2&px=999"
                                    alt="Profile"
                                    className="rounded-circle"
                                    style={{ width: '150px', height: '180px' }}
                                />
                                <h3>John Doe</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card border shadow-sm h-100">
                            <div className="p-3">
                                <h4 className="text-center" style={{ color: "#00838f" }}>Background</h4>
                                <p>
                                    Position: Senior Software Developer
                                    <br />
                                    Work Experience: 5 years
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="card border shadow-sm h-100">
                            <div className="p-3">
                                <h4 className='text-center' style={{ color: "#00838f" }}>Tech Skills</h4>
                                <ul className="list-group d-flex flex-row justify-content-center">
                                    <li className="list-group-item border-0"><span className="badge bg-primary">JavaScript</span></li>
                                    <li className="list-group-item border-0"><span className="badge bg-secondary">React</span></li>
                                    <li className="list-group-item border-0"><span className="badge bg-success">Node.js</span></li>
                                    <li className="list-group-item border-0"><span className="badge bg-danger">HTML/CSS</span></li>
                                </ul>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card border shadow-sm h-100">
                            <div className="p-3">
                                <h4 className='text-center' style={{ color: "#00838f" }}>Fun Fact</h4>
                                <p>
                                    Enjoys playing the guitar and has a collection of over 20 guitars.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;