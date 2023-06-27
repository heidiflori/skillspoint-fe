import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import { Container, TextField } from '@mui/material';
import AuthContext from "../store/auth-context";
import apiUrl from '../apiConfig';
import Cookies from 'js-cookie';
import Footer from "../components/Footer";
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

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
  const [errorMessage, setErrorMessage] = useState(null);

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
          let errorMessage = " Please check your username and password and try again.";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        });
      }
    }).then(data => {
      const expiresIn = 86400;
      const expirationTime = new Date(new Date().getTime() + (expiresIn * 1000));

      Cookies.set('token', data.accessToken, { expires: expiresIn / (60 * 60 * 24) }); // Salvăm tokenul în cookies
      Cookies.set('currentuserid', data.id, { expires: expiresIn / (60 * 60 * 24) });
      
      console.log(expirationTime);
      authCtx.login(data.accessToken, expirationTime.toISOString());
      navigate('/home');
    }).catch(err => {
      setErrorMessage(err.message);
    });
};

  const theme = useTheme();

  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto auto auto', alignItems: 'center', backgroundColor: "#eef5fa" }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
        <img src="/logoapp.png" alt="descriptive text" style={{ width: '20%', height: 'auto' }} />
        <p style={{fontWeight: 'bold', fontSize:40, color:"#00838f", textShadow: '1px 1px rgba(0, 0, 0, 0.3)' }}>SkillMaster</p>
        <p style={{fontWeight: 'bold', fontSize:25, color:"#00474e", textShadow: '1px 1px rgba(0, 0, 0, 0.3)', textAlign: 'center', marginLeft: '10px', marginRight: '10px' }}>"Share your skills, master new ones"</p>
      </div>
      {errorMessage && <p style={{ color: '#00474e',textAlign:'center', fontWeight: 'bold' }}><FontAwesomeIcon icon={faInfoCircle} />{errorMessage}</p>}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'auto',
          margin: 'auto',
          alignItems: 'center',
          width: '35%',
          minWidth: '350px',
          borderRadius: '10px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
          marginTop: 1,
          marginBottom:2,
          [theme.breakpoints.down('sm')]: {
            width: '90%',
          }
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', padding: 3 }}>
          <p style={{fontSize:22, color:"#5E5E5E", textAlign: 'center', marginLeft: '10px', marginRight: '10px' }}>Log in to your account</p>
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