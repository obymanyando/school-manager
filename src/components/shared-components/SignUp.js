import React, { useContext } from 'react';
import { FirebaseContext } from '../Firebase';
import {Link} from 'react-router-dom';
import '../../assets/styles/LoginSignUp.css';
import LoginImg from '../../assets/images/login.jpg';
import useSignUpForm from '../../helpers/hook/useSignUpForm'
import useGoBack from '../../helpers/hook/useGoBack';
import FullSpinner from './FullSpinner';

const Content = () => {
    const firebase = useContext(FirebaseContext)
    const {handleSubmit, handleChange, users, message} = useSignUpForm(firebase);
    const {goBack} = useGoBack();
    const isInvalid =
    users.passwordOne !== users.passwordTwo ||
    users.passwordOne === '' ||
    users.email === '' ||
    users.userName === '';

    return (
        <div className='main'>
            <section className="signup">
                <div className="container-login">
                    <div className='close-icon'>
                        <button onClick={goBack} className='close-btn'><img src="https://img.icons8.com/windows/32/000000/xbox-x.png" alt='go back'/></button>
                    </div>
                    <div className="signup-content">
                        <div className="signup-form">
                        <h3 className='blue-ttl main_title'>Sign up</h3>
                            {(message && !users.error) && <p>{message}</p>}
                            {users.error && <p>{users.error.message}</p>}
                            <form className="register-form" id="register-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="userName"><img src="https://img.icons8.com/metro/16/000000/name.png" alt='icon'/></label>
                                    <input 
                                        type="text" 
                                        name="userName" 
                                        id="userName" 
                                        placeholder="Your Name"
                                        onChange={handleChange}
                                        value={users.userName}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><img src="https://img.icons8.com/material/16/000000/new-post--v1.png" alt='icon'/></label>
                                    <input 
                                        type="email" name="email" id="email" placeholder="Your Email"
                                        onChange={handleChange}
                                        value={users.email}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordOne"><img src="https://img.icons8.com/material/16/000000/forgot-password.png" alt='icon'/></label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="passwordOne" 
                                        placeholder="Password"
                                        onChange={handleChange}
                                        value={users.password}
                                />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordTwo"><img src="https://img.icons8.com/windows/16/000000/forgot-password.png" alt='icon'/></label>
                                    <input 
                                        type="password" 
                                        name="repassword" 
                                        id="passwordTwo" 
                                        placeholder="Repeat your password"
                                        onChange={handleChange}
                                        value={users.repassword}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" required/>
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <button 
                                        type="submit" 
                                        name="signup" 
                                        id="signup" 
                                        className="main-btn" 
                                        disabled={isInvalid}
                                        required
                                    >Register</button>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={LoginImg} alt="sign up image"/></figure>
                            <Link to='/login' className="signup-image-link">I am already member</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const SignUp = () => {
    return (
        <>
            <Content />
        </>
    )
}

export default SignUp;
