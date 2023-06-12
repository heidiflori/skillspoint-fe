import {React} from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Container, TextField } from '@mui/material';
import Register from './Register';



function checkUsername() {
    const DUMMY_USERNAME = 'vrema';
    
    const username = document.querySelector('#username_textfield');
    if(!(username.value === DUMMY_USERNAME)) {
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
    if(!(password.value === DUMMY_PASSWORD)) {
        password.value = '';
        return false;
    }  else {
        password.value = '';
        return true;
    }
}

function checkCredentials() {
    if(checkPassword() && checkUsername()) {
        alert("Login successful");
    } else {
        alert('Wrong username and/or password!');
    }
}

function Login() {

    const navigateToRegister = () => {
        return <Register />
    }

    return( 
        <Container sx={{display: 'flex', flexDirection:'column', justifyContent:'center', p:'auto', m:'auto', alignItems: 'center'}}>
            <Box sx={{display: 'flex', flexDirection:'column', width: 1/4}}>
                <TextField sx={{p:1, m:1}} required id="username_textfield" label="Username" placeholder='Enter your username. e.g: firstname.lastname'/>
                <TextField sx={{p:1, m:1}} required id='password_textfield' label="Password" placeholder='Enter your password' type='password' />
            </Box>
        
            <Box>
                <Button sx={{p:1, m:1}} variant='contained' onClick={checkCredentials}>Log in</Button>
                <Button sx={{p:1, m:1}} variant='contained' onClick={navigateToRegister}>Register</Button>
            </Box>
        </Container>
    )
}

export default Login;