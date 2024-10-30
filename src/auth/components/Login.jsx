import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        navigate('/home');
    };

    return (
        <div className='login-container'>
            <div className='login-form'>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Email"
                    className='input-field'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className='input-field'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className='forgot-password'>
                    <label>
                        <input type="checkbox" id="rememberMe" /> Remember me
                    </label>
                    <p>Forgot Password</p>
                </div>
                <div className='button-container'>
                    <button className='login-button' onClick={handleLogin}><b>Login</b></button>
                </div>
                <p className='register-text'>Don't have an account?
                <Link to="/signup">Register</Link>
                </p>
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
