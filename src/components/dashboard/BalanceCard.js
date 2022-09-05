import axios from 'axios';
import React, { useState } from 'react'

const BalanceCard = ({ userData, getProfile, getHistory }) => {
    const [depositedAmount, setDepositedAmount] = useState('');

    const endpoint = "http://localhost:5000/user/fund-account";
    const fundAccount = () => {
        let email = localStorage.getItem("userEmail");
        console.log(email, depositedAmount);
        axios.post(endpoint, { email, depositedAmount }).then((res) => {
            console.log(res.data);
            getProfile();
            getHistory();

            setDepositedAmount('')
        }).catch(err => console.log(err))
    }

    return (
        <div className="row container justify-content-around align-item-center py-5">
            {/* Balance and account nu */}
            <div className="col-sm-6 mx-md-3">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">Welcome {userData.firstname} {userData.lastname}</h1>
                        <h5 className="card-title"><span className="text-muted">Available Balance:</span> &#8358; {userData.availBalance}</h5>
                        <p className="card-text">Account Number: {userData.accountNumber}</p>
                        {/* <a href="#" className="btn btn-primary text-center"><i className="bi bi-cash-stack"></i> Fund Account</a> */}
                        <button type="button" className="btn btn-primary"
                            data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            // onClick={fundAccount}
                        >
                            <i className="bi bi-cash-stack"></i> Fund Account
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Picture */}
            <div className="car col-6" style={{ width: "18rem" }}>
                <div className="rati ratio-1x1 text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp" className="card-img-to rounded-circle account-pic" alt="profile-picture" />

                </div>
                <div className="card-body text-center">
                    <h5 className="card-title small my-2">{userData.email}</h5>
                    <button className="btn btn-primary">Upload Picture <i className="bi bi-pencil-square"></i></button>

                </div>

            </div>




            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Fund / Deposit </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mx-5">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name='depositor'
                                    id="floatingInput" readOnly
                                    value={`${userData.firstname} ${userData.lastname}`} />
                                <label htmlFor="floatingInput">Depositor's Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name='transactiontype'
                                    id="floatingInput" readOnly
                                    value='Bank Deposit' />
                                <label htmlFor="floatingInput">Transaction Type</label>
                            </div>
                            <div className="form-floating">
                                <input type="number" className="form-control" 
                                    id="floatingPassword" name='depositedamount'
                                    placeholder='amount' autoFocus 
                                    onChange={(e) => setDepositedAmount(e.target.value)}
                                />
                                <label htmlFor="floatingPassword">Amount</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={fundAccount}>make a deposit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default BalanceCard