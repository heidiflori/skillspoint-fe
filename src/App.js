import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Home from './components/Home';
import Training from './components/Training';
import TrainingBrowser from './components/TrainingBrowser';
import EnrolledTrainings from './components/EnrolledTrainings';
import UserTrainings from './components/UserTrainings';
import Profile from './components/Profile';
import TrainingDetails from './components/TrainingDetails';

function App() {
  return (
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/trainings' exact element={<Training />} />
        <Route path='/trainings/browse' exact element={<TrainingBrowser />} />
        <Route path='/trainings/enrolled' exact element={<EnrolledTrainings />} />
        <Route path='/mytrainings' exact element={<UserTrainings />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/training-details" exact element={<TrainingDetails/>}/>
        {/* <Footer /> */}
      </Routes>
  );
}

export default App;
