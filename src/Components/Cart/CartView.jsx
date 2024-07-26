import React from "react";
import Dispatch from "../Redux/Dispatch";
import { Link } from 'react-router-dom'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { decrement } from "../Redux/Slices/Counter";
import { removeProduct } from "../Redux/Slices/Cart";
import { subPrice } from "../Redux/Slices/TotalPrice";
import './CartView.css'
function CartView() {
    const { count, cart, dispatch, totalPrice } = Dispatch()
    return (
        <div className="Cart">
            {
                count === 0 ?
                    <div className="text-center">
                        <h1>Your cart is Empty</h1>
                        <Link to='/'>
                            {
                                <button className='border-0 bg-dark rounded-2 px-5 py-2 text-white fw-bold'><ShoppingCartCheckoutIcon />Shop Now</button>
                            }
                        </Link>
                    </div> :
                    <div className="text-center">
                        <h1>You Added the Products are</h1>
                        {
                            cart.map((product, index) =>
                                <div className="CartProductsDisplay" key={index}>
                                    {
                                        product.m_id && (
                                            <div className="Mobile">
                                                <img src={product.m_img} alt={product.m_name} className="img-fluid" />
                                                <h5>{product.m_name}</h5>
                                                <h1>₹{product.m_price}</h1>
                                                <div className="RemoveFromCart">
                                                    <button className="border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold mb-2" onClick={() => { dispatch(decrement()); dispatch(removeProduct(product.m_id)); dispatch(subPrice(product.m_price)) }}>Remove from cart</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        product.l_id && (
                                            <div className="Laptop">
                                                <img src={product.l_img} alt={product.l_name} className="img-fluid" />
                                                <h5>{product.l_name}</h5>
                                                <h1>₹{product.l_price}</h1>
                                                <div className="RemoveFromCart">
                                                    <button className="border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold mb-2" onClick={() => { dispatch(decrement()); dispatch(removeProduct(product.l_id)); dispatch(subPrice(product.l_price)) }}>Remove from cart</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        product.t_id && (
                                            <div className="TV">
                                                <img src={product.t_img} alt={product.t_name} className="img-fluid" />
                                                <h5>{product.t_name}</h5>
                                                <h1>₹{product.t_price}</h1>
                                                <div className="RemoveFromCart">
                                                    <button className="border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold mb-2" onClick={() => { dispatch(decrement()); dispatch(removeProduct(product.t_id)); dispatch(subPrice(product.t_price)) }}>Remove from cart</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        product.w_id && (
                                            <div className="Watch">
                                                <img src={product.w_img} alt={product.w_name} className="img-fluid" />
                                                <h5>{product.w_name}</h5>
                                                <h1>₹{product.w_price}</h1>
                                                <div className="RemoveFromCart">
                                                    <button className="border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold mb-2" onClick={() => { dispatch(decrement()); dispatch(removeProduct(product.w_id)); dispatch(subPrice(product.w_price)) }}>Remove from cart</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        product.b_id && (
                                            <div className="Bluetooth">
                                                <img src={product.b_img} alt={product.b_name} className="img-fluid" />
                                                <h5>{product.b_name}</h5>
                                                <h1>₹{product.b_price}</h1>
                                                <div className="RemoveFromCart">
                                                    <button className="border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold mb-2" onClick={() => { dispatch(decrement()); dispatch(removeProduct(product.b_id)); dispatch(subPrice(product.b_price)) }}>Remove from cart</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        product.p_id && (
                                            <div className="PowerBank">
                                                <img src={product.p_img} alt={product.p_name} className="img-fluid" />
                                                <h5>{product.p_name}</h5>
                                                <h1>₹{product.p_price}</h1>
                                                <div className="RemoveFromCart">
                                                    <button className="border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold mb-2" onClick={() => { dispatch(decrement()); dispatch(removeProduct(product.p_id)); dispatch(subPrice(product.p_price)) }}>Remove from cart</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        product.f_id && (
                                            <div className="Fridge">
                                                <img src={product.f_img} alt={product.f_name} className="img-fluid" />
                                                <h5>{product.f_name}</h5>
                                                <h1>₹{product.f_price}</h1>
                                                <div className="RemoveFromCart">
                                                    <button className="border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold mb-2" onClick={() => { dispatch(decrement()); dispatch(removeProduct(product.f_id)); dispatch(subPrice(product.f_price)) }}>Remove from cart</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        product.wm_id && (
                                            <div className="WashingMachine">
                                                <img src={product.wm_img} alt={product.wm_name} className="img-fluid" />
                                                <h5>{product.wm_name}</h5>
                                                <h1>₹{product.wm_price}</h1>
                                                <div className="RemoveFromCart">
                                                    <button className="border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold mb-2" onClick={() => { dispatch(decrement()); dispatch(removeProduct(product.wm_id)); dispatch(subPrice(product.wm_price)) }}>Remove from cart</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        product.e_id && (
                                            <div className="ElectricFan">
                                                <img src={product.e_img} alt={product.e_name} className="img-fluid" />
                                                <h5>{product.e_name}</h5>
                                                <h1>₹{product.e_price}</h1>
                                                <div className="RemoveFromCart">
                                                    <button className="border-0 bg-danger rounded-2 px-5 py-2 text-white fw-bold mb-2" onClick={() => { dispatch(decrement()); dispatch(removeProduct(product.e_id)); dispatch(subPrice(product.e_price)) }}>Remove from cart</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
            }
            {
                count !== 0 && <h1 className="text-center">
                    {
                        totalPrice !== 0 ? `Total Price : ₹${totalPrice}` : null
                    }
                </h1>
            }
        </div>
    )
}
export default CartView