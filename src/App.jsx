import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar.jsx';
import Login from './Components/Credentials/Login/Login.jsx'
import Register from './Components/Credentials/Register/Register';
import CartView from './Components/Cart/CartView.jsx';
import Mobile from './Components/Products/Mobile/Mobile'
import Laptop from './Components/Products/Laptop/Laptop.jsx';
import Tv from './Components/Products/TV/TV'
import Watch from './Components/Products/Watch/Watch'
import Bluetooth from './Components/Products/Bluetooth/Bluetooth.jsx';
import PowerBank from './Components/Products/PowerBank/PowerBank';
import Fridge from './Components/Products/Fridge/Fridge';
import WasingMachine from './Components/Products/WashingMachine/WasingMachine';
import ElectricFan from './Components/Products/ElectricFan/ElectricFan'
import './App.css'
const App = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <div className='error'>
        <h1>Sorry the URL Navigation not found.</h1>
      </div>,
      element: (
        <>
          <Navbar />
          <Home />
        </>
      )
    },
    {
      path: '/Account/Login',
      element: (
        <>
          <Navbar />
          <Login />
        </>
      )
    },
    {
      path: '/Account/Register',
      element: (
        <>
          <Navbar />
          <Register />
        </>
      )
    },
    {
      path: '/Mobiles',
      element: (
        <>
          <Navbar />
          <Mobile />
        </>
      )
    },
    {
      path: '/Laptops',
      element: (
        <>
          <Navbar />
          <Laptop />
        </>
      )
    },
    {
      path: '/Tv',
      element: (
        <>
          <Navbar />
          <Tv />
        </>
      )
    },
    {
      path: '/Watches',
      element: (
        <>
          <Navbar />
          <Watch />
        </>
      )
    },
    {
      path: '/Bluetooths',
      element: (
        <>
          <Navbar />
          <Bluetooth />
        </>
      )
    },
    ,
    {
      path: '/Power Banks',
      element: (
        <>
          <Navbar />
          <PowerBank />
        </>
      )
    },
    {
      path: '/Fridges',
      element: (
        <>
          <Navbar />
          <Fridge />
        </>
      )
    },
    {
      path: '/Washing Machines',
      element: (
        <>
          <Navbar />
          <WasingMachine />
        </>
      )
    },
    {
      path: '/Electric Fans',
      element: (
        <>
          <Navbar />
          <ElectricFan />
        </>
      )
    },
    {
      path: '/Cart',
      element: (
        <>
          <Navbar />
          <CartView />
        </>
      )
    }
  ]
)
export default App