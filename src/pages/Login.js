import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import { Container, TextField } from '@mui/material';
import AuthContext from "../store/auth-context";
import apiUrl from '../apiConfig';
import Footer from "../components/Footer";
import { useTheme } from '@mui/material/styles';

/*
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
*/

function Login() {
  const navigate = useNavigate();
  // const history = useHistory();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  function handleRegisterClick() {
    navigate('/register');
  }

  // function handleLoginClick(event) {
  //   if (checkCredentials(event)) {
  //     let path = "/home";
  //     navigate(path);
  //   } else {
  //     alert('Invalid username/password');
  //   }
  // }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleLoginClick = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: add validation

    setIsLoading(true);
    
    const url = `${apiUrl}/api/auth/signin`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username: enteredUsername,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication failed!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        });
      }
    }).then(data => {
      const expiresIn = 500;
      const expirationTime = new Date(new Date().getTime() + (expiresIn * 1000));
      console.log(expirationTime);
      authCtx.login(data.accessToken, expirationTime.toISOString());
      // history.replace('/');
      navigate('/home');
    }).catch(err => {
      alert(err.message);
    });
  };

  const theme = useTheme();

  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto auto auto', alignItems: 'center', backgroundColor: "#eef5fa" }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
        <img src="/logoapp.png" alt="descriptive text" style={{ width: '20%', height: 'auto' }} />
        <p style={{fontWeight: 'bold', fontSize:40, color:"#00838f" }}>SkillMaster</p>
        <p style={{fontWeight: 'bold', fontSize:25, color:"#00474e" }}>"Share your skills, master new ones"</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'auto',
          margin: 'auto',
          alignItems: 'center',
          width: '70%',
          borderRadius: '10px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
          marginTop: 2,
          marginBottom:2,
          [theme.breakpoints.down('sm')]: {
            width: '90%',
          }
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', padding: 3 }}>
            <TextField
              sx={{ padding: 1, margin: 1 }}
              required
              id="username_textfield"
              label="Username"
              placeholder="Enter your username. e.g: firstname.lastname"
              inputRef={usernameInputRef}
            />
            <TextField
              sx={{ padding: 1, margin: 1 }}
              required
              id="password_textfield"
              label="Password"
              placeholder="Enter your password"
              type="password"
              inputRef={passwordInputRef}
            />
          </Box>
          <Box>
            <Button
              sx={{ padding: 1, margin: 1, fontWeight: 'bold', backgroundColor: '#00838f', color: '#fff','&:hover': {backgroundColor: '#004d40'}}}
              variant="contained"
              onClick={handleLoginClick}
            >
              Log in
            </Button>
            <Button sx={{ padding: 1, margin: 1, fontWeight: 'bold',backgroundColor: '#00838f', color: '#fff','&:hover': {backgroundColor: '#004d40'}}} variant="contained" onClick={handleRegisterClick}>
              Register
            </Button>
          </Box>
        </Container>
      </div>
      <Footer style={{ gridRow: '3' }}/>
    </div>
);

}

export default Login;