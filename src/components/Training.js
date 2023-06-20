import React, { useEffect, useState } from 'react';


function Training() {
    const [courses, setCourses] = useState([]);
    const [visibleCourses, setVisibleCourses] = useState(6);
    const [showLessVisible, setShowLessVisible] = useState(false);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await fetch('http://localhost:3001/courses');
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data = await response.json();
                setCourses(data[0]);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCourses();
    }, []);

    const showMoreCourses = () => {
        setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 6);
        setShowLessVisible(true);
    };

    const showLessCourses = () => {
        setVisibleCourses(6);
        setShowLessVisible(false);
    };

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {courses.slice(0, visibleCourses).map((course, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card h-100 d-flex flex-column">
                            <div className="card-body">
                                <h3 className="card-title">{course.title}</h3>
                                <p className="card-text">Trainer: {course.trainer}</p>
                                <p className="card-text">Type: {course.type}</p>
                                <p className="card-text">Duration: {course.duration}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleCourses < courses.length && !showLessVisible ? (
                <div className="text-center mt-4 mb-5">
                    <button className="btn btn-secondary" onClick={showMoreCourses}>
                        Show More
                    </button>
                </div>
            ) : null}
            {showLessVisible ? (
                <div className="text-center mt-4 mb-5">
                    <button className="btn btn-secondary" onClick={showLessCourses}>
                        Show Less
                    </button>
                </div>
            ) : null}
        </div>
    );
}

export default Training;
