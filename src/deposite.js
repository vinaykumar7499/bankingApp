import React, { useState } from 'react';
import './App.css';
import { arr } from './data';
import { useNavigate } from 'react-router-dom';

const Deposit = () => {
  const [accno, setAccNo] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();  // useNavigate hook for navigation

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
        <h1>Deposit</h1>
        <input
          placeholder="Account number"
          value={accno}
          onChange={(e) => setAccNo(e.target.value)}
        />
        <input
          placeholder="Deposit Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleDeposit}>Deposit Amount</button>
      </div>
    </div>
  );
};

export default Deposit;
