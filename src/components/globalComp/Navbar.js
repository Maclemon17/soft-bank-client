import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logobg.png';

const Navbar = ({ auth }) => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("authenticated");
        localStorage.removeItem("userEmail");
        navigate('/')
    }


    return (
        <header className="sticky-top" style={{ backgroundColor: "#e3f2fd" }}>
            <nav className="navbar navbar-expand-lg" >

                <div className="container rounded-0" style={{ backgroundColor: "#e3f2fd" }}>

                    <Link to="/">
                        <img src={logo} height="auto"
                            width='120' alt="MDB Logo" loading="lazy" className='img-fluid' style={{ marginTop: "-1px" }} />
                    </Link>

                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarButtonsExample">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">Dashboard</a>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center">
                            {
                                !auth ? <>
                                    <Link to="/login">
                                        <button type="button" className="btn  btn-outline-primary px-3 me-2">Login</button>
                                    </Link>

                                    <Link to="/register">
                                        <button type="button" className="btn btn-primary me-3">
                                            Sign up
                                        </button>
                                    </Link>
                                </> :

                                    <button type="button"
                                        className="btn btn-outline-primary px-3 me-2"
                                        onClick={logout}>
                                        Log out
                                    </button>

                            }


                        </div>
                    </div>

                </div>

            </nav>
        </header>
    )
}

export default Navbar