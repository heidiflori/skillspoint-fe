import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, CarouselItem } from "react-bootstrap";
import apiUrl from '../apiConfig.js';
import Cookies from 'js-cookie';


function Slideshow() {
    const [courses, setCourses] = useState([]);

    const [trainings, setTrainings] = useState([]);

    // Un array cu URL-uri ale pozelor
    const imageUrls = [
        'https://storage.googleapis.com/skillspoint-images/slideshow11.jpg', 
        'https://storage.googleapis.com/skillspoint-images/slideshow22.jpg', 
        'https://storage.googleapis.com/skillspoint-images/slideshow33.jpg', 
        'https://storage.googleapis.com/skillspoint-images/slideshow44.jpg', 
        'https://storage.googleapis.com/skillspoint-images/slideshow88.jpg', 
        'https://storage.googleapis.com/skillspoint-images/slideshow66.jpg', 
        'https://storage.googleapis.com/skillspoint-images/slideshow77.jpg'
    ];

    // Generează un index aleator între 0 și lungimea array-ului minus 1
    const getRandomImageIndex = () => {
        return Math.floor(Math.random() * imageUrls.length);
    };

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
                setTrainings(data);
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
                    <div className="slide d-block justify-content-center align-items-center rounded" 
                        style={{ 
                            height: '20rem',
                            backgroundImage: `url(${imageUrls[getRandomImageIndex()]})`, 
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.4)', 
                            width: '100%', 
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: '5px',
                        }}>
                            <h2 className="text-center pt-4" style={{fontSize:"40px", color: 'black'}}><span className="modal-span">{course.title}</span></h2>
                            <p className="text-center" style={{fontSize:"30px", color: 'black'}}><span className="modal-span">Trainer: {course.trainer}</span></p>
                        </div>
                    </div>
                </CarouselItem>
            ))}
        </Carousel>
    );
}

export default Slideshow;
