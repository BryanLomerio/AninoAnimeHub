import React from 'react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import './Login.css';

function Login() {
    return (
        <div className='login-container'>
            <div className='login-form'>
                <h1>Login</h1>
                <input type="text" placeholder="Email" className='input-field' required />
                <input type="password" placeholder="Password" className='input-field' required />
                <div className='forgot-password'>
                    <input type="checkbox" /> Remember me
                    <p>Forgot Password</p>
                </div>
                <div className='button-container'>
                    <button className='login-button'><b>Login</b></button>
                </div>
                <p className='register-text'>Don't have account? <b>Register</b></p>
            </div>
            <div className='social-buttons'>
                <button className='social-button'><FaGoogle /> Google</button>
                <button className='social-button'><FaFacebook /> Facebook</button>
                <button className='social-button'><FaTwitter /> Twitter</button>
            </div>
        </div>
    );
}

export default Login;
