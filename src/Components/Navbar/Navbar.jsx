import React from 'react'
import './Navbar.css'
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import Dispatch from '../Redux/Dispatch';
const Navbar = () => {
    const {count}=Dispatch()
    return (
        <div className='d-flex justify-content-around p-1 bg-primary Navbar'>
            <div className='ShopZing'>
                <Link to='/' className='text-decoration-none'>
                    <div>ShopZing</div>
                </Link>
            </div>
            <div className="Account">
                <Link to='/Account/Login' className='text-decoration-none'>
                    <div>
                        <LoginIcon />
                    </div>
                </Link>
            </div>
            <div className="cart">
                <Link to='/Cart'  className='text-decoration-none'>
                    <div>
                        <ShoppingCartIcon />
                        <span>{count===0 ? 0 :count}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar