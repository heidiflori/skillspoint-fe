import React from 'react';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container, TextField } from '@mui/material';
import Register from './Register';

function checkUsername(event) {
    event.preventDefault();
    const DUMMY_USERNAME = 'vrema';
    const username = document.querySelector('#username_textfield').value;
    if (!(username === DUMMY_USERNAME)) {
        document.querySelector('#username_textfield').value = '';
        return false;
    } else {
        document.querySelector('#username_textfield').value = '';
        return true;
    }
}

function checkPassword(event) {
    event.preventDefault();
    const DUMMY_PASSWORD = 'parola';
    const password = document.querySelector('#password_textfield').value;
    if (!(password === DUMMY_PASSWORD)) {
        document.querySelector('#password_textfield').value = '';
        return false;
    } else {
        document.querySelector('#password_textfield').value = '';
        return true;
    }
}

function checkCredentials(event) {
    event.preventDefault();
    if (checkPassword(event) && checkUsername(event)) {
        alert('Login successful');
    } else {
        alert('Wrong username and/or password!');
    }
}

function Login() {
    // const checkCredentials = () => {
    //   // Add your logic here to check the credentials
    // };
  
    return (
      <Routes>
        <Route path="/" element={<Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'auto',
            margin: 'auto',
            alignItems: 'center',
            border: '1px solid black',
            width: '50%',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <TextField
              sx={{ padding: 1, margin: 1 }}
              required
              id="username_textfield"
              label="Username"
              placeholder="Enter your username. e.g: firstname.lastname"
            />
            <TextField
              sx={{ padding: 1, margin: 1 }}
              required
              id="password_textfield"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
          </Box>
          <Box>
            <Link to="/">
              <Button
                sx={{ padding: 1, margin: 1 }}
                variant="contained"
                onClick={checkCredentials}
              >
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button sx={{ padding: 1, margin: 1 }} variant="contained">
                Register
              </Button>
            </Link>
          </Box>
        </Container>}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

export default Login;