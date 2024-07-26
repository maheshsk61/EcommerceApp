import React, { useState } from "react"
import { laptopsData } from "./Laptop_DATA"
import Dispatch from "../../Redux/Dispatch"
import { increment } from "../../Redux/Slices/Counter"
import { addProduct } from "../../Redux/Slices/Cart"
import { addPrice } from "../../Redux/Slices/TotalPrice"
import './Laptop.css'
const Laptop = () => {
    const { dispatch } = Dispatch()
    const [isClicked, setIsClicked] = useState()
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    laptopsData.map((l) =>
                        <div className="col-xs-12" key={l.id}>
                            <div className="Laptops d-flex overflow-x-hidden">
                                <img src={l.l_img} alt={l.l_img} className="img-fluid" />
                                <div className="d-flex flex-column">
                                    <h5 className="Name">{l.l_name}</h5>
                                    <h1 className="Price">₹{l.l_price}</h1>
                                    <div className="Details">
                                        <ul className='list-unstyled'>
                                            <li><b>Processor : </b>{l.l_details.processor}</li>
                                            <li><b>Memory : </b>{l.l_details.memory}</li>
                                            <li><b>Storage : </b>{l.l_details.storage}</li>
                                            <li><b>OS : </b>{l.l_details.os}</li>
                                            <li><b>Display : </b>{l.l_details.display}</li>
                                        </ul>
                                    </div>
                                    <div className="AddToCart">
                                        <button className="border-0 rounded-2 px-5 py-2 text-white fw-bold mb-2" style={{ backgroundColor: isClicked === l.l_id ? 'green' : 'black' }} onClick={() => { dispatch(increment()); dispatch(addProduct(l)); dispatch(addPrice(l.l_price)); setIsClicked(l.l_id) }}>Add to cart</button>
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
export default Laptop