import { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import { arr } from "./data";

const CreateAccount = () => {

    const [type, setType] = useState('');
    const [accno, setAccno] = useState('');
    const [holdername, setHoldername] = useState('');
    const [initialAmount, setInitialAmount] = useState(0);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [duplicateError, setDuplicateError] = useState('');

    const Create = () => {

        if (type === '' || accno === '' || holdername === '' || initialAmount === 0){
            setError('All fields are required');
            return;
        } else {
            setError('');
        }

        let obj = {
            type: type,
            accno: accno,
            holdername: holdername,
            initialAmount: initialAmount,
        };

        // const accNumbers = arr.map(item => item.accno);
       
        const accNumbers = [];
        arr.forEach(item => {
          accNumbers.push(item.accno);
        });
        
        if (accNumbers.includes(accno)) {
            setDuplicateError('Account with this account number already exists.');
        } else {
            arr.push(obj);
            setDuplicateError('');
            alert("account Created Successfully")
            navigate('/dashboard');
            console.log(arr);
        }
    };

    return (
        <div className="Acc">
            <h1>Create your account with details</h1>

            <div className="accbox">
                <h3>Account Type</h3>
                <select onChange={(e) => setType(e.target.value)}>
                    <option value="">Account Type</option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                    <option value="Salary">Salary</option>
                </select>
                <input onChange={(e) => setAccno(e.target.value)} type="text" placeholder="Account Number"></input>
                <input onChange={(e) => setInitialAmount(Number(e.target.value))} type="number" placeholder="Initial Amount"></input>
                <input onChange={(e) => setHoldername(e.target.value)} type="text" placeholder="Holder Name"></input>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {duplicateError && <p style={{ color: 'red' }}>{duplicateError}</p>}

                <button onClick={Create}>Create Account</button>
            </div>
        </div>
    );
};

export default CreateAccount;
