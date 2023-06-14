import React from 'react';
import { Route, Router, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import LoginForm from './components/LoginForm'
import Register from './components/Register';

function App() {
  return (
    <>
        <Login />
        <Register />
    </>
  );
}

export default App;
