import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Cookies from 'js-cookie';
import apiUrl from '../apiConfig';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import '../styles/calendar.css'
import { Row, Col } from 'react-bootstrap';

const useStyles = makeStyles({
    card: {
      marginBottom: '1rem',
      backgroundColor: '#f5f5f5', 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
      transition: 'transform 0.6s ease-in-out', 
      height: '100%',
      '&:hover': {
        transform: 'scale(1.05)', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      },
      flex: '1 0 auto'
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#00838f',
      marginBottom: '0.5rem',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
});
  
const TrainingCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [allTrainings, setAllTrainings] = useState([]);
    const [filteredTrainings, setFilteredTrainings] = useState([]);

    const token = Cookies.get('token');
    const classes = useStyles();

    useEffect(() => {
        async function fetchTrainings() {
            try {
                const response = await fetch(apiUrl + '/api/skills/trainings/approved-trainings', {
                    headers: {
                        Authorization: `Bearer ${token}`, // add token to the header
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data = await response.json();
                console.log(data);
                setAllTrainings(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchTrainings();
    }, [token]);

    const fetchTrainingsForDate = async (selectedDate) => {
        try {
            const response = await fetch(apiUrl + '/api/skills/trainings/approved-trainings', {
                headers: {
                    Authorization: `Bearer ${token}`, // add token to the header
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch courses');
            }
            const data = await response.json();
            console.log(data);

            const trainingsForDate = data.filter(training => {
                const trainingDate = new Date(training.startingDate);
                return isSameDay(trainingDate, selectedDate);
            });

            setFilteredTrainings(trainingsForDate);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDateChange = date => {
        setDate(date);
        setFilteredTrainings([]);
        fetchTrainingsForDate(date);
    };

    const renderTrainings = () => {
        return (
            <Row>
                {filteredTrainings.map(training => (
                    <Col xs={12} md={filteredTrainings.length > 0 ? 6 : 12}>
                        <div className={classes.cardContainer}>
                            <Card className={classes.card} key={training.startingDate}>
                                <CardContent style={{backgroundColor:'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
                                    <Typography className={classes.title} component="h2">
                                        Training: {training.title}
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        Trainer: {training.trainer}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        );
    };

   


    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const hasTraining = allTrainings.some(training =>
                isSameDay(new Date(training.startingDate), date)
            );
            return hasTraining ? <div className="has-training-indicator" /> : null;
        }
        return null;
    };

    const tileClassName = ({ date }) => {
        const hasTraining = allTrainings.some(training =>
            isSameDay(new Date(training.startingDate), date)
        );
        return hasTraining ? 'has-training' : null;
    };

    return (
        <div className='mt-5'>
            <Calendar
                className="mb-4 mx-auto"
                value={date}
                onChange={handleDateChange}
                locale="en-US"
                tileContent={tileContent}
                tileClassName={tileClassName}
            />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px'}}>
                {filteredTrainings.length > 0 ? (
                    renderTrainings()
                ) : (
                    <Typography variant="body1" sx={{color: "#00838f"}}>No trainings available for the selected day</Typography>
                )}
            </div>
        </div>
    );
};

const isSameDay = (date1, date2) => {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
};

export default TrainingCalendar;
