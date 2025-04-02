import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './Login';
import CreateAccount from './createAcc';
import Dashboard from './Dashboard';
import Deposit from './deposite';
import Withdraw from './withdraw';
import Fundtransfer from './fundtransfer';


const appRouter = createBrowserRouter([
   
  {
    path:'/',
    element:<Login/>
  },
   {
    path:'/deposit',
    element:<Deposit/>
   },
  {
    path:'/createacc',
    element:<CreateAccount/>
  },
  {
    path:'/withdraw',
    element:<Withdraw/>
  },
  {
    path:'/fundtransfer',
    element:<Fundtransfer/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={appRouter} basename="bankingApp"><Login/></RouterProvider>
  </React.StrictMode>
);
reportWebVitals();
