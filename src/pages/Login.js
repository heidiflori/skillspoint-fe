import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { Container, TextField } from '@mui/material';

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
    document.querySelector('#username_textfield').value = '';
    document.querySelector('#password_textfield').value = '';
    return true;
  } else {
    document.querySelector('#username_textfield').value = '';
    document.querySelector('#password_textfield').value = '';
    return false;
  }
}

function Login() {
  const navigate = useNavigate();

  function handleRegisterClick() {
    let path = '/register';
    navigate(path);
  }

  function handleLoginClick(event) {
    if (checkCredentials(event)) {
      let path = "/home";
      navigate(path);
    } else {
      alert('Invalid username/password');
    }
  }

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'auto',
      margin: 'auto',
      alignItems: 'center',
      border: '1px solid black',
      width: '50%',
      marginTop: 1
    }}>
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
        <Button
          sx={{ padding: 1, margin: 1 }}
          variant="contained"
          onClick={handleLoginClick}
        >
          Log in
        </Button>
        <Button sx={{ padding: 1, margin: 1 }} variant="contained" onClick={handleRegisterClick}>
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default Login;