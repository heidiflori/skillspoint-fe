import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, CarouselItem } from "react-bootstrap";

function Slideshow() {
    const [courses, setCourses] = useState([]);

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

    return (
        <Carousel className="container">
            {courses.map((course, index) => (
                <CarouselItem key={index}>
                    <div className="slide d-block justify-content-center align-items-center" style={{ backgroundColor: course.bg_color, height: '10rem' }}>
                        <h2 className="text-center">{course.title}</h2>
                        <p className="text-center">Trainer: {course.trainer}</p>
                    </div>
                </CarouselItem>
            ))}
        </Carousel>
    );
}

export default Slideshow;
