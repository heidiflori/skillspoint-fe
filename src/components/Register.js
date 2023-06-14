import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Username register:", username, password);

    setUsername("");
    setPassword("");

    // navigate("/login");
  };

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
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your Password"
        />
      </Box>

      <Box>
        <Button
          sx={{ marginRight: "10px" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Register
        </Button>
        <Button variant="contained">
          Go to Login
        </Button>
      </Box>
    </Container>
  );
}

export default Register;
