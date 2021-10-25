import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import '../../assets/styles/LoginSignUp.css';
import LoginImg from '../../assets/images/login.jpg';
import useGoBack from '../../helpers/hook/useGoBack';
import useResetPass from '../../helpers/hook/useResetPass';
import { FirebaseContext } from '../Firebase';


const Content = () => { 
    const firebase = useContext(FirebaseContext); 
    const {goBack} = useGoBack();
    const {handleSubmit, handleChange, users} = useResetPass(firebase);
    const isInvalid = users.email === '';
    
    return (
        <div className="main">
            <section className="sign-in">
                <div className="container-login">
                    <div className='close-icon'>
                        <button onClick={goBack} className='close-btn'><img src="https://img.icons8.com/windows/32/000000/xbox-x.png" alt='go back'/></button>
                    </div>
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src={LoginImg} alt="sing up"/></figure>
                            <Link to='/signup' className="signup-image-link">Create an account</Link>
                        </div>
                        {
                        users.message 
                        ?   (
                                <div className="signin-form reset-container">
                                    <form className="register-form">
                                        <div className="form-group">
                                            <p>{users.message}</p>
                                        </div>
                                        <div className="form-group form-button">
                                            <Link to='/'><button type="submit"className='main-btn'>Back to Homepage</button></Link>
                                        </div>
                                    </form>
                                </div>
                            )
                        :   (
                            <div className="signin-form reset-container">
                                <h3 className='blue-ttl main_title'>Reset My Password</h3>
                                <form onSubmit={handleSubmit} method="POST" className="register-form" id="login-form">
                                    {users.error && <p>{users.error.message}</p>}
                                    <div className="form-group">
                                        <label htmlFor="email"><img src="https://img.icons8.com/material/16/000000/new-post--v1.png" alt='email'/></label>
                                        <input 
                                            type="text" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Your Email"
                                            value={users.email}
                                            onChange={handleChange}
                                        />
                                        {users.message && <p>{users.message}</p>}
                                    </div>
                                    <div className="form-group form-button">
                                        <button disabled={isInvalid} type="submit" name="signin" id="signin" className='main-btn'>Reset Password</button>
                                    </div>
                                </form>
                            </div>
                            )
                        }
                        
                    </div>
                </div>
            </section>
        </div>
    )
}


const ResetPass = () => {
    return (
        <>
            <Content />
        </>
    )
}

export default ResetPass;
