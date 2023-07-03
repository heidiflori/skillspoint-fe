import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Cookies from 'js-cookie';
import apiUrl from '../apiConfig';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        marginBottom: '1rem',
        margin: '1rem'
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
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
        return filteredTrainings.map(training => (
            <Card className={classes.card} key={training.startingDate}>
                <CardContent>
                    <Typography className={classes.title} component="h2">
                        Training: {training.title}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Trainer: {training.trainer}
                    </Typography>
                </CardContent>
            </Card>
        ));
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
                    <Typography variant="body1">No trainings available for the selected day</Typography>
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
