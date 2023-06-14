import React from 'react';
import { Route, Router, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Login />
        <Register />
        {/* <Footer /> */}
    </>
  );
}

export default App;
