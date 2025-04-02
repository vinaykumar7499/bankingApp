import { useEffect, useState } from 'react';
import './App.css'
import { arr } from './data';
import { Link } from 'react-router-dom';
const Dashboard = () => {

    const [data, setData] = useState();

    useEffect(() => {
        setData(arr)
        console.log("Initial Data:", arr);
    }, []);

    const task1 = () => {
        const result = arr.filter((item) => {
            if (item.type === "Salary") {
                return item;
            }
            else {
                return false;
            }
        })
        setData(result)
        console.log(data)
    }
    const task2 = () => {
        const result = arr.filter((item) => item.type === "Saving")
        setData(result)
        console.log(result);
        console.log(arr);
    }

    const task3 = () => {
        const result = arr.filter((item) => {
            if (item.type === "Current") {
                return item;
            }
            else {
                return false;
            }
        })
        setData(result)
    }

    return (
        <div className='dash'>
            <div className='button-grp'>
                <div className='heading'>
                    <h1>Dashboard</h1>
                </div>

                <div className='btn'>
                    <button onClick={task1}>Salary</button>
                    <button onClick={task2}>Saving</button>
                    <button onClick={task3}>Current</button>
                </div>
            </div>

            <div className='sidebar'>
                <button><Link to='/deposit'>Deposit</Link></button>
                <button><Link to='/createacc'>Create Account </Link></button>
                <button><Link to='/withdraw'>Withdraw</Link></button>
                <button><Link to='/fundtransfer'>Fund Transfer</Link></button>
            </div>

            <div className='view'>
                <table className='t' >
                    <thead>
                        <tr>
                            <th>Account type</th>
                            <th>Account number</th>
                            <th>Holder name</th>
                            <th>Initial Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.type}</td>
                                <td>{item.accno}</td>
                                <td>{item.holdername}</td>
                                <td>{item.initialAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Dashboard;

