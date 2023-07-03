import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import TrainingBrowser from './pages/TrainingBrowser';
import EnrolledTrainings from './pages/EnrolledTrainings';
import UserTrainings from './pages/UserTrainings';
import Profile from './pages/Profile';
import Requested from './pages/Requested';
import RequestTraining from './pages/RequestTraining';
import CreateTraining from './pages/CreateTraining';
import PendingTrainingRequestPage from './pages/PendingTrainingRequestPage';
import AboutUs from './pages/AboutUs';
import HelpPage from './pages/HelpPage';
import TrainingCalendar from './components/TrainingCalendar';
import Attendance from './pages/Attendance';
function App() {
  return (
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path='/home' exact element={<Home />} />
        {/* <Route path='/trainings' exact element={<Training />} /> */}
        <Route path='/trainings/browse' exact element={<TrainingBrowser />} />
        <Route path='/trainings/enrolled' exact element={<EnrolledTrainings />} />
        <Route path='/mytrainings' exact element={<UserTrainings />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/requested" exact element={<Requested />} />
        <Route path="/request-training" exact element={<RequestTraining />} />        
        <Route path="/create-training" exact element={<CreateTraining />} />      
        <Route path="/pending-requests" exact element={<PendingTrainingRequestPage />} />    
        <Route path="/about-us" exact element={<AboutUs />} /> 
        <Route path="/help" exact element={<HelpPage />} />
        <Route path='/calendar' exact element={<TrainingCalendar />} />
        <Route path='/attendance' exact element={<Attendance />} />
        {/* <Footer /> */}
      </Routes>
  );
}

export default App;
