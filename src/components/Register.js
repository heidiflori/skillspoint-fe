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

        <Box sx={{display: 'flex', flexDirection: 'row'}}>
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
            // value={username}
            // onChange={handleUsernameChange}
            placeholder="Last name" />
        </Box>

        <TextField sx={{ marginBottom: "10px" }}
          required
          id="email_textfield"
          label="Email"
          // value={username}
          // onChange={handleUsernameChange}
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
          // value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your Password"
        />

        <TextField
          sx={{ marginBottom: "10px" }}
          required
          id="confirm_password_textfield"
          label="Confirm password"
          type="password"
          // value={password}
          onChange={handlePasswordChange}
          placeholder="Confirm password"
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
      </Box>
    </Container>
  );
}

export default Register;
