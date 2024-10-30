import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/login');
    };

    return (
        <div className='login-container'>
            <div className='login-form'>
                <div className='backbtn'>
                        <IoIosArrowBack className='back-icon' onClick={handleBackClick} />
                    <h1>Signup</h1>
                </div>

                <input type="text" placeholder="Username" className='input-field' required />
                <input type="email" placeholder="Email" className='input-field' required />
                <input type="password" placeholder="Password" className='input-field' required />
                
                <button className='login-button'><b>Signup</b></button>
            </div>
        </div>
    );
}

export default SignupForm;
