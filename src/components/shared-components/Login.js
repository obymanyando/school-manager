import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import '../../assets/styles/LoginSignUp.css';
import LoginImg from '../../assets/images/login.jpg';
import useGoBack from '../../helpers/hook/useGoBack';
import useLoginForm from '../../helpers/hook/useLoginForm';
import { FirebaseContext } from '../Firebase';


const Content = () => {
    const firebase = useContext(FirebaseContext);
    const { goBack } = useGoBack();
    const { handleSubmit, handleChange, users } = useLoginForm(firebase);
    const isInvalid = users.password === '' || users.email === '';

    return (
        <div className="main">
            <section className="sign-in">
                <div className="container-login">
                    <div className='close-icon'>
                        <button onClick={goBack} className='close-btn'><img src="https://img.icons8.com/windows/32/000000/xbox-x.png" alt="close button"/></button>
                    </div>
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src={LoginImg} alt="sing up" /></figure>
                            <Link to='/signup' className="signup-image-link">Create an account</Link>
                        </div>

                        <div className="signin-form">
                            <h3 className='blue-ttl main_title'>Login</h3>
                            {users.error && <p>{users.error.message}</p>}
                            <form onSubmit={handleSubmit} method="POST" className="register-form" id="login-form">
                                <div className="form-group">
                                    <label htmlFor="email"><img src="https://img.icons8.com/material/16/000000/new-post--v1.png" alt="email icon"/></label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        value={users.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"><img src="https://img.icons8.com/material/16/000000/forgot-password.png" alt="icon"/></label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        value={users.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                    {
                                        users.error
                                            ? <Link to='/resetpass'>Forget password?</Link>
                                            : <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                    }

                                </div>
                                <div className="form-group form-button">
                                    <button disabled={isInvalid} type="submit" name="signin" id="signin" className='main-btn'>Log in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const Login = () => {
    return (
        <>
            <Content />
        </>
    )
}

export default Login;
