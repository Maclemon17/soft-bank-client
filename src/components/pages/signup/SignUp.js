import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
// import '../../../assets/fonts/material-icon/css/material-design-iconic-font.css';
import '../../../assets/css/Style.css';
import signUpImg from '../../../assets/images/signup-image.jpg';


const SignUp = () => {

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const endpoint = "http://localhost:5000/user/register";
    const [message, setMessage] = useState("");
    // const [accountNumber, setaccountNumber] = useState('')

    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        const accountNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
        let userDetails = { firstname, lastname, email, password, accountNumber };
        console.log(endpoint);
        axios.post(endpoint, userDetails).then((res) => {
            console.log(res.data);
            setMessage(res.data.message);
            navigate('/login')
        }).catch(err => console.log(err));
        console.log(userDetails);
    }


    return (
        // <div className='main'>
        <section className="signup mt-5">
            <div className="container">


                {message === '' ? "" : <span className="alert alert-success text-center m-auto">{message}</span>}
                <div className="signup-content">

                    <div className="signup-form">
                        <div className="alert alert-danger">{ message }</div>

                        <form method="POST" className="register-form" id="register-form">
                            <h2 className="form-title">Sign up</h2>
                            <div className="form-group">
                                <label htmlFor="firstname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="firstname" id="firstname" placeholder="Firstname" onChange={(e) => { setfirstname(e.target.value) }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="lastname" id="lastname" placeholder="Lastname" onChange={(e) => { setlastname(e.target.value) }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" onChange={(e) => { setemail(e.target.value) }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" m className="agree-term" />
                                <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                {/* <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/> */}
                                <button type='submit' className="form-submit" id="signup" onClick={signUp}>Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={signUpImg} alt="sing up image" /></figure>
                        <a href="#" className="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>
        // </div>
    )
}

export default SignUp