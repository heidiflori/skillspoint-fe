import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Container, TextField } from '@mui/material';
import Register from './Register';



function checkUsername() {
    const DUMMY_USERNAME = 'vrema';

    const username = document.querySelector('#username_textfield');
    if (!(username.value === DUMMY_USERNAME)) {
        username.value = '';
        return false;
    } else {
        username.value = '';
        return true;
    }
}

function checkPassword() {
    const DUMMY_PASSWORD = 'parola';

    const password = document.querySelector('#password_textfield');
    if (!(password.value === DUMMY_PASSWORD)) {
        password.value = '';
        return false;
    } else {
        password.value = '';
        return true;
    }
}

function checkCredentials() {
    if (checkPassword() && checkUsername()) {
        alert("Login successful");
    } else {
        alert('Wrong username and/or password!');
    }
}

function Login() {
    return (
        <Container sx={{mt:5, p:0}}>
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 'auto', m: 'auto', alignItems: 'center', border: "1px solid black", width:'50%'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <TextField sx={{ p: 1, m: 1 }} required id="username_textfield" label="Username" placeholder='Enter your username. e.g: firstname.lastname' />
                    <TextField sx={{ p: 1, m: 1 }} required id='password_textfield' label="Password" placeholder='Enter your password' type='password' />
                </Box>

                <Box>
                    <Link to="/"><Button sx={{ p: 1, m: 1 }} variant='contained' onClick={checkCredentials}>Log in</Button></Link>
                    <Link to="/register"><Button sx={{ p: 1, m: 1 }} variant='contained'>Register</Button></Link>
                </Box>
            </Container>
            <Routes>
                <Route path='/'></Route>
                <Route path='/register' element={<Register />}></Route>
            </Routes>
        </Container>
    )
}

export default Login;