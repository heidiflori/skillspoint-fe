import { useRef, useContext, useState } from "react";
import { useHistory, useNavigate, Navigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { Container, TextField, Button } from '@mui/material';
import apiUrl from '../apiConfig.js';
function LoginAuth() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
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
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  function handleRegisterClick() {
    let path = '/register';
    navigate(path);
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
      <form onSubmit={submitHandler}>
        <TextField
          sx={{ padding: 1, margin: 1 }}
          required
          id="email"
          label="Email"
          inputRef={emailInputRef}
        />
        <TextField
          sx={{ padding: 1, margin: 1 }}
          required
          id="password"
          label="Password"
          type="password"
          inputRef={passwordInputRef}
        />
        <Button
          sx={{ padding: 1, margin: 1 }}
          variant="contained"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Log in'}
        </Button>
        <Button
          sx={{ padding: 1, margin: 1 }}
          variant="contained"
          onClick={handleRegisterClick}
          disabled={isLoading}
        >
          Register
        </Button>
      </form>
    </Container>
  );
}

export default LoginAuth;
