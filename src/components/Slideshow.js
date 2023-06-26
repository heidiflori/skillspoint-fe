import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, CarouselItem } from "react-bootstrap";
import apiUrl from '../apiConfig.js';
import Cookies from 'js-cookie';

function Slideshow() {
    const [courses, setCourses] = useState([]);

    // useEffect(() => {
    //     async function fetchCourses() {
    //         try {
    //             // const response = await fetch(apiUrl + '/courses');
    //             const response = await fetch(`${apiUrl}/api/trainings/approved-trainings`);
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch courses');
    //             }
    //             const data = await response.json();
    //             setCourses(data[0]);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }

    //     fetchCourses();
    // }, []);
    

    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        const fetchTrainings = async () => {
            try {
                const token = Cookies.get('token'); // preia tokenul
                const response = await fetch(apiUrl + '/api/skills/trainings/approved-trainings', {
                    headers: {
                        'Authorization': `Bearer ${token}` // adauga tokenul in header
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data = await response.json();
                console.log(data);
                setCourses(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTrainings();
    }, []);

    return (
        <Carousel className="container">
            {trainings.map((course, index) => (
                <CarouselItem key={index}>
                    <div className="slide d-block justify-content-center align-items-center rounded" style={{ backgroundColor: "#eef5fa", height: '10rem' }}>
                        <h2 className="text-center">{course.title}</h2>
                        <p className="text-center">Trainer: {course.trainer}</p>
                    </div>
                </CarouselItem>
            ))}
        </Carousel>
    );
}

export default Slideshow;
