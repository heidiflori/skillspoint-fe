import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import apiUrl from '../apiConfig';
import { Table, Button } from 'react-bootstrap';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import Navigationbar from '../components/Navigationbar';
import Footer from '../components/Footer';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Attendance = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const fetchTrainings = async () => {
      const token = Cookies.get('token');
      const options = {
        headers: { 'Authorization': `Bearer ${token}` }
      };

      try {
        const response = await axios.get(`${apiUrl}/api/skills/trainings/approved-trainings`, options);

        const trainingsWithUsers = await Promise.all(
          response.data.map(async (training) => {
            const userResponse = await axios.get(`${apiUrl}/api/skills/enrolled-users/training/${training.id}`, options);
            return {
              ...training,
              users: userResponse.data,
            };
          })
        );

        setTrainings(trainingsWithUsers);
      } catch (error) {
        console.error("Eroare la încărcarea datelor:", error);
      }
    };

    fetchTrainings();
  }, []);

  const markAttendance = async (userId, trainingId) => {
    const token = Cookies.get('token');
    const options = {
      headers: { 'Authorization': `Bearer ${token}` }
    };

    try {
      await axios.put(`${apiUrl}/api/skills/enrolled-users/attendance/${userId}/${trainingId}`, {}, options);

      // Actualizează starea trainings
      setTrainings(prevTrainings => {
        return prevTrainings.map(training => {
          if (training.id === trainingId) {
            // Actualizează câmpul "Attendance" al utilizatorului
            const updatedUsers = training.users.map(user => {
              if (user.user.id === userId) {
                return {
                  ...user,
                  attendedTraining: 'Yes'
                };
              }
              return user;
            });

            return {
              ...training,
              users: updatedUsers
            };
          }
          return training;
        });
      });

      
    } catch (error) {
      console.error("Eroare la actualizarea participării:", error);
    }
  }

  return (
    <>
      <div className='container' style={{ paddingTop: '10px'}}>
        <h2 style={{ marginBottom: "30px", textAlign: "center", color: "#00474e" }}>Trainings Attendance</h2>
        {trainings.map((training) => (
          <Accordion key={training.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography><span className="modal-span">Title:</span> {training.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="text-center">Username</th>
                    <th className="text-center">Attendance</th>
                    <th className="text-center">Mark Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {training.users.map((enrolledUser) => (
                    <tr key={enrolledUser.id}>
                      <td className="text-center" style={{ paddingTop: "21px" }}>{enrolledUser.user.username}</td>
                      <td className="text-center" style={{ paddingTop: "21px" }}>
                        {enrolledUser.attendedTraining === 'Yes' ? (
                          <BsCheckCircle color="green" size="1.5em" />
                        ) : (
                          <BsXCircle color="red" size="1.5em" />
                        )}
                      </td>
                      <td className="text-center" style={{ paddingBottom: "16px" }}>
                        <Button onClick={() => markAttendance(enrolledUser.user.id, training.id)}>Mark Attendance</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default Attendance;
