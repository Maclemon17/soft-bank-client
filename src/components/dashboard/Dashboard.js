import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

const Dashboard = () => {
    // const [autenticated, setAutenticated] = useState(null);
    const [profileData, setProfileData] = useState({});
    const loggedInUser = localStorage.getItem("authenticated");
    const endpoint = "http://localhost:5000/user/profile";

    useEffect(() => {
        getProfileData();
        // console.log('getting....');
    }, []);

    const getProfileData = () => {
        let email = localStorage.getItem("userEmail");
        // console.log(email);
        axios.post(endpoint, { email }).then((res) => {
            console.log(res.data);
            setProfileData(res.data.result);
        }).catch(err => console.log(err));

    }

    return (
        <>
            {
                
                !loggedInUser ? <Navigate replace to="/login" /> : <Sidebar profileData={ profileData } /> 
            }
           
        </>
    );

}

export default Dashboard