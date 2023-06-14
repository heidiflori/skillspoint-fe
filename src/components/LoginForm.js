import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import RegisterForm from './RegisterForm';

function LoginForm() {
    return (
        <BrowserRouter basename='/'>
            <ul>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/register" element={<RegisterForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default LoginForm;