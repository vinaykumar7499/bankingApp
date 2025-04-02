import React, { useState } from 'react';
import './App.css';
import { arr } from './data';
import { useNavigate } from 'react-router-dom';

const Fundtransfer = () => {
    const [accno, setAccNo] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handleDeposit = () => {
        const account = arr.find((item) => item.accno === accno);
        if (account) {
            account.initialAmount = parseInt(account.initialAmount) + parseInt(amount);
            setAmount('');
            setAccNo('');
            navigate('/dashboard');
            console.log(arr);
        } else {
            alert('Error: Account not found');
        }
    };

    return (
        <div className="decont">
            <div className='deposit'>
                <h1>Fund transfer</h1>
                <input placeholder="From Account number" value={accno} onChange={(e) => setAccNo(e.target.value)} />
                <input placeholder="To Account number" value={accno} onChange={(e) => setAccNo(e.target.value)} />
                <input placeholder="transfer fund Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button onClick={handleDeposit}>Transfer Fund</button>
            </div>
        </div>
    );
};

export default Fundtransfer;
