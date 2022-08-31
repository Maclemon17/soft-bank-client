import axios from 'axios';
import React from 'react'

const BalanceCard = ({ userData }) => {
    const endpoint = "/user/"
    const fundAccount = () => {
        let email = localStorage.getItem("userEmail");
        axios.post(endpoint, { email }).then((res) => {
            console.log(res.data);
        })
    }

    return (
        <div className="row container justify-content-around align-item-center py-5">
            {/* Balance and account nu */}
            <div className="col-sm-6 mx-3">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">Good Day {userData.firstname}</h1>
                        <h5 className="card-title"><span className="text-muted">Available Balance:</span> &#8358; {userData.availBalance}</h5>
                        <p className="card-text">Account Number: { userData.accountNumber}</p>
                        <a href="#" className="btn btn-primary text-center"><i class="bi bi-cash-stack"></i> Fund Account</a>
                    </div>
                </div>
            </div>

            {/* Profile Picture */}
            <div class="car" style={{ width: "18rem" }}>
                <div className="rati ratio-1x1 text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp" class="card-img-to rounded-circle account-pic" alt="profile-picture" />

                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">User Email</h5>
                    <a href="#" className="btn btn-primary">Upload Picture <i class="bi bi-pencil-square"></i></a>

                </div>

            </div>
        </div>
    )
}

export default BalanceCard