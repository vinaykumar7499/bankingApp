import { useState } from "react"
import './App.css'

const Login =()=>{

     const[user ,setUser] = useState('')
     const[pass,setPassword]=useState('')
     const[error,setError]=useState('')
     const[passError,setPassError] = useState('')


     let data = {
        name:"vinay",
        pass:"vinay1234"
     }

     const task = ()=>{
        if(user!==''&& pass!==''){

            setError(false)
            setPassError(false)
        }
        
        if(user===data.name && pass===data.pass){
            setTimeout(() => {
                window.location.href = '/dashboard';              
            },100);  
    
        }
            else{
                setError(true)
                setPassError(true)
                setTimeout(()=>{
                 alert('login failed')
                },100)
            }
        

     }

     return(
         <div className="box">
            <h1 className="h1">Welcome to My Banking App</h1>
            <div className="login">
               
            <h1>Login</h1>
            <p>Username:</p>
            <input onChange={(e)=>setUser(e.target.value)}  type="name" placeholder="username"></input>
            {error&& <p>this field is required</p>}
            <p>Password:</p>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password"></input>
            {passError&&<p>this field is required</p>}<br></br>
            <button onClick={task}>Submit</button>
            </div>
        
        </div>
     )
}


export default Login;