import React, { useState } from "react"
import { mobilesData } from "./Mobile_DATA"
import Dispatch from "../../Redux/Dispatch"
import { increment } from "../../Redux/Slices/Counter"
import { addProduct } from "../../Redux/Slices/Cart"
import { addPrice } from "../../Redux/Slices/TotalPrice"
import './Mobile.css'
const Mobile = () => {
    const { dispatch } = Dispatch()
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    mobilesData.map((m) =>
                        <div className="col-xs-12" key={m.id}>
                            <div className="Mobiles d-flex overflow-x-hidden">
                                <img src={m.m_img} alt={m.m_img} className="img-fluid" />
                                <div className="d-flex flex-column">
                                    <h5 className="Name">{m.m_name}</h5>
                                    <h1 className="Price">₹{m.m_price}</h1>
                                    <div className="Details">
                                        <ul className='list-unstyled'>
                                            <li><b>Memory : </b>{m.m_details.memory}</li>
                                            <li><b>Display : </b>{m.m_details.display}</li>
                                            <li><b>Camera : </b>{m.m_details.camera}</li>
                                            <li><b>Battery : </b>{m.m_details.battery}</li>
                                            <li><b>Processor : </b>{m.m_details.processor}</li>
                                        </ul>
                                    </div>
                                    <div className="AddToCart">
                                        <button className="border-0 bg-success rounded-2 px-5 py-2 text-white fw-bold mb-2" onClick={() => { dispatch(increment()); dispatch(addProduct(m)); dispatch(addPrice(m.m_price)) }}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Mobile