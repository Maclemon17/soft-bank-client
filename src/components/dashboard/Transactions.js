import React from 'react'
import transfer from '../../assets/svg/transfer.svg';
import withdraw from '../../assets/svg/withdraw.svg';
import wallet from '../../assets/svg/wallet.svg';
const Transactions = () => {
    return (
        <div className='row container justify-content-around bg-light py-5'>
            <div class="border border-light transaction col-sm-3">
                <img src={transfer} class="card-img-top" alt="Sunset Over the Sea" />
                <div class="card-body">
                    <p class="card-text text-center h3 mt-1">Transfer</p>
                </div>
            </div>

            <div class="border border-light transaction col-sm-3 text-center">
                <img src={withdraw} class="card-img-top" alt="Sunset Over the Sea" />
                <div class="card-body">
                    <p class="card-text text-cente h3 mt-1">Withdraw</p>
                </div>
            </div>

            <div class="border border-light transaction col-sm-3">
                <img src={wallet} class="card-img-top" alt="Sunset Over the Sea" />
                <div class="card-body">
                    <p class="card-text text-cente h3 mt-1">Wallet</p>
                </div>
            </div>
        </div>
    )
}

export default Transactions