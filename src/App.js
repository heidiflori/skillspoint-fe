import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
