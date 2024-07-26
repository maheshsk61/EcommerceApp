import React, { useState } from "react"
import { powerBanksData } from "./PowerBank_DATA"
import Dispatch from "../../Redux/Dispatch"
import { increment } from "../../Redux/Slices/Counter"
import { addProduct } from "../../Redux/Slices/Cart"
import { addPrice } from "../../Redux/Slices/TotalPrice"
import './PowerBank.css'
const PowerBank = () => {
    const { dispatch } = Dispatch()
    const [isClicked, setIsClicked] = useState()
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    powerBanksData.map((p) =>
                        <div className="col-xs-12" key={p.id}>
                            <div className="PowerBanks d-flex overflow-x-hidden">
                                <img src={p.p_img} alt={p.p_img} className="img-fluid" />
                                <div className="d-flex flex-column">
                                    <h5 className="Name">{p.p_name}</h5>
                                    <h1 className="Price">₹{p.p_price}</h1>
                                    <div className="Details">
                                        <ul className='list-unstyled'>
                                            <li><b>Capacity : </b>{p.p_details.capacity}</li>
                                            <li><b>Weight : </b>{p.p_details.weight}</li>
                                            <li><b>Battery Type : </b>{p.p_details.batteryType}</li>
                                        </ul>
                                    </div>
                                    <div className="AddToCart">
                                        <button className="border-0 rounded-2 px-5 py-2 text-white fw-bold mb-2" style={{ backgroundColor: isClicked === p.p_id ? 'green' : 'black' }} onClick={() => { dispatch(increment()); dispatch(addProduct(p)); dispatch(addPrice(p.p_price)); setIsClicked(p.p_id) }}>Add to cart</button>
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
export default PowerBank