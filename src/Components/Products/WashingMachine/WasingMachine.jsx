import React, { useState } from "react"
import { washingMachinesData } from "./WasingMachine_DATA"
import Dispatch from "../../Redux/Dispatch"
import { increment } from "../../Redux/Slices/Counter"
import { addProduct } from "../../Redux/Slices/Cart"
import { addPrice } from "../../Redux/Slices/TotalPrice"
import './WasingMachine.css'
const WasingMachine = () => {
    const { dispatch } = Dispatch()
    const [isClicked, setIsClicked] = useState()
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    washingMachinesData.map((wm) =>
                        <div className="col-xs-12" key={wm.wm_id}>
                            <div className="WashingMachines d-flex overflow-x-hidden">
                                <img src={wm.wm_img} alt={wm.wm_img} className="img-fluid" />
                                <div className="d-flex flex-column">
                                    <h5 className="Name">{wm.wm_name}</h5>
                                    <h1 className="Price">₹{wm.wm_price}</h1>
                                    <div className="Details">
                                        <ul className='list-unstyled'>
                                            <li><b>Capacity : </b>{wm.wm_details.capacity}</li>
                                            <li><b>Maximum Rotational Speed : </b>{wm.wm_details.maximumRotationalSpeed}</li>
                                            <li><b>Voltage : </b>{wm.wm_details.voltage}</li>
                                            <li><b>Access Location : </b>{wm.wm_details.accessLocation}</li>
                                            <li><b>Item Weight : </b>{wm.wm_details.itemWeight}</li>
                                            <li><b>Item Dimensions LxWxH : </b>{wm.wm_details.itemDimensionsLxWxH}</li>
                                        </ul>
                                    </div>
                                    <div className="AddToCart">
                                        <button className="border-0 rounded-2 px-5 py-2 text-white fw-bold mb-2" style={{ backgroundColor: isClicked === wm.wm_id ? 'green' : 'black' }} onClick={() => { dispatch(increment()); dispatch(addProduct(wm)); dispatch(addPrice(wm.wm_price)); setIsClicked(wm.wm_id) }}>Add to cart</button>
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
export default WasingMachine