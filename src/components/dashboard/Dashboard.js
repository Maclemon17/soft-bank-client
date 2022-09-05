import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const Dashboard = () => {
    // const [autenticated, setAutenticated] = useState(null);
    const email = localStorage.getItem("userEmail");
    const [profileData, setProfileData] = useState({});
    const [transactionHistory, setTransactionHistory] = useState([])
    const loggedInUser = localStorage.getItem("authenticated");
    const profile = "http://localhost:5000/user/profile";
    const history = "http://localhost:5000/user/history";

    useEffect(() => {
        getProfileData();
    }, []);

   

    const getProfileData = () => {
        // console.log(email);
        axios.post(profile, { email }).then((res) => {
            console.log(res.data);
            setProfileData(res.data.result);
            // getTransactionHistory() 
        }).catch(err => console.log(err));

    }

    const getTransactionHistory = () => {
        axios.post(history, { email }).then((res) => {
            setTransactionHistory(res.data.result);
        }).catch(err => console.log(err))
    } 

    useEffect(() => {
        getTransactionHistory()
    }, []);

    return (
        <>
            {
                !loggedInUser ? <Navigate replace to="/login" /> : 
                <Sidebar profileData={ profileData } getProfile={ getProfileData } 
                    history={ transactionHistory } getHistory={getTransactionHistory}
                /> 
            }
           
        </>
    );

}

export default Dashboard