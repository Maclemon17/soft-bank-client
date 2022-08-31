import React, { useState } from 'react'
import '../../../assets/fonts/material-icon/css/material-design-iconic-font.css';
import '../../../assets/css/Style.css';
import signInImg from '../../../assets/images/signin-image.jpg';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState( localStorage.getItem("authenticated") || false);
    const endpoint = "http://localhost:5000/user/login";
    const navigate = useNavigate();


    const logIn = () => {
        let userDetails = { email, password };
        axios.post(endpoint, userDetails).then((res) => {
            console.log(res.data);
            if (res.data.status === true) {
                localStorage.setItem("authenticated", res.data.status);
                setIsLoggedIn(true);
                localStorage.setItem("userEmail", res.data.result.email)
                navigate('/dashboard', { state: {email: res.data.result.email} })
            } else {

            }
        }).catch(err => console.log(err));
    }


    return (
        <div className="main">
            {/* {console.log(isLoggedIn)} */}
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src={signInImg} alt="sing up image" /></figure>
                            <a href="#" className="signup-image-link">Create an account</a>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Sign In</h2>
                            {/* <form method="POST" className="register-form" id="login-form"> */}
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email material-icons-name"></i></label>
                                <input type="text" name="email" id="email" placeholder="Email Address" required autoFocus onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            {/* <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div> */}
                            <div className="form-group form-button">
                                {/* <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/> */}
                                <button id="signin" className="form-submit" onClick={logIn}>Login</button>
                            </div>
                            {/* </form> */}
                            <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <ul className="socials">
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignIn