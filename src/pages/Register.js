import { Box, Button, Container, TextField, stepIconClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import apiUrl from '../apiConfig.js';

//TODO: check first name and last name
// we need documentation for this

//TODO: check email
function checkEmail(event) {
  event.preventDefault();
  let email = document.querySelector('#email_textfield').value;
  if (email.includes('@')) {
    let aroundIndex = email.indexOf('@');
    let afterAroundEmail = email.substr(aroundIndex);
    if (afterAroundEmail.includes('.')) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//TODO: check username
function checkUsername(event) {
  event.preventDefault();
  let username = document.querySelector('#username_textfield').value;
  if (username.length < 3 || username.length > 20) {
    return false;
  } else {
    if (username[0].toLowerCase() >= 'a' && username[0].toLowerCase() <= 'z') {
      if (username.includes('@')) {
        alert('username contains @')
        return false;
      }
      return true;
    } else {
      alert('username must start with letter')
      return false;
    }
  }
}


//TODO: check passwords
function checkPassword(event) {
  event.preventDefault();
  let firstPassword = document.querySelector('#password_textfield').value;

  let numberOfDigits = 0;
  for (let i = 0; i < 10; i++) {
    if (firstPassword.includes(i)) {
      numberOfDigits++;
    }
  }

  let numberOfLetters = 0;
  for (let i = 'a'; i < 'z'; i++) {
    if (firstPassword.includes(i)) {
      numberOfLetters++;
    }
  }

  let numberOfSpecialCharacters = 0;
  for (let i = 0; i < firstPassword.length; i++) {
    if (firstPassword[i] === '.' || firstPassword[i] === ',' || firstPassword[i] === '/' || firstPassword[i] === '!' || firstPassword[i] === '@') {
      numberOfSpecialCharacters++;
    }
  }

  if (numberOfDigits > 0 && numberOfLetters > 0 && numberOfSpecialCharacters > 0) {
    return true;
  } else {
    return false;
  }
}

function confirmPassword(event) {
  let passwordToConfirm = document.querySelector('#confirm_password_textfield').value;
  let firstPassword = document.querySelector('#password_textfield').value;
  if (checkPassword(event)) {
    if (firstPassword === passwordToConfirm) {
      return true;
    }
  } else {
    return false;
  }
}


function Register() {

  const navigate = useNavigate();



  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  async function handleRegisterClick(event) {
    let emailValid = checkEmail(event);
    let isEmailValid = false;
    if (emailValid) {
      isEmailValid = true;
    }

    let isUsernameValid = false;
    let usernameValid = checkUsername(event);
    if (usernameValid) {
      isUsernameValid = true;
    }

    let arePasswordsCorrect = false;
    let confirmedPassword = confirmPassword(event);
    if (confirmedPassword) {
      arePasswordsCorrect = true;
    }

    if (isEmailValid && isUsernameValid && arePasswordsCorrect) {
      event.preventDefault();
      try {
        await axios.post(apiUrl + "/api/auth/signup", {
          username: username,
          email: email,
          password: password
        });
        alert(`User has registered successfully`)
        setUsername("");
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log(error);
      }
      let path = '/home';
      navigate(path);
    } else {
      console.log('invalid register session!')
    }

  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          marginBottom: "20px",
        }}
      >

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <TextField sx={{ marginBottom: "10px", marginRight: "10px" }}
            required
            id="first_name_textfield"
            label="First name"
            // value={username}
            // onChange={handleUsernameChange}
            placeholder="First name" />

          <TextField sx={{ marginBottom: "10px" }}
            required
            id="last_name_textfield"
            label="Last name"
            placeholder="Last name" />
        </Box>

        <TextField sx={{ marginBottom: "10px" }}
          required
          id="email_textfield"
          label="Email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email address" />

        <TextField
          sx={{ marginBottom: "10px" }}
          required
          id="username_textfield"
          label="Username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
        />
        <TextField
          sx={{ marginBottom: "10px" }}
          required
          id="password_textfield"
          label="Password"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <TextField
          sx={{ marginBottom: "10px" }}
          required
          id="confirm_password_textfield"
          label="Confirm password"
          type="password"
          placeholder="Confirm password"
        />
      </Box>

      <Box>
        <Button
          sx={{ marginRight: "10px" }}
          variant="contained"
          onClick={handleRegisterClick}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default Register;
