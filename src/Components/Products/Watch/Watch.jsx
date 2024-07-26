import React, { useState } from "react"
import { watchesData } from "./Watch_DATA"
import Dispatch from "../../Redux/Dispatch"
import { increment } from "../../Redux/Slices/Counter"
import { addProduct } from "../../Redux/Slices/Cart"
import { addPrice } from "../../Redux/Slices/TotalPrice"
import './Watch.css'
const Watch = () => {
    const { dispatch } = Dispatch()
    const [isClicked, setIsClicked] = useState()
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    watchesData.map((w) =>
                        <div className="col-xs-12" key={w.w_id}>
                            <div className="Watches d-flex overflow-x-hidden">
                                <img src={w.w_img} alt={w.w_img} className="img-fluid" />
                                <div className="d-flex flex-column">
                                    <h5 className="Name">{w.w_name}</h5>
                                    <h1 className="Price">₹{w.w_price}</h1>
                                    <div className="Details">
                                        <ul className='list-unstyled'>
                                            {
                                                w.w_details.os &&
                                                <li><b>OS : </b>{w.w_details.os}</li>
                                            }
                                            {
                                                w.w_details.waterResistance &&
                                                <li><b>Water Resistance : </b>{w.w_details.waterResistance}</li>
                                            }
                                            {
                                                w.w_details.idealFor &&
                                                <li><b>Ideal For : </b>{w.w_details.idealFor}</li>
                                            }
                                            {
                                                w.w_details.bandColor &&
                                                <li><b>Band Colour : </b>{w.w_details.bandColor}</li>
                                            }
                                            {
                                                w.w_details.bandMaterial &&
                                                <li><b>Band Material : </b>{w.w_details.bandMaterial}</li>
                                            }
                                            {
                                                w.w_details.batteryType &&
                                                <li><b>Battery Type : </b>{w.w_details.batteryType}</li>
                                            }
                                            {
                                                w.w_details.batteryLife &&
                                                <li><b>Battery Life : </b>{w.w_details.batteryLife}</li>

                                            }
                                            {
                                                w.w_details.chargeTime &&
                                                <li><b>Charge Time : </b>{w.w_details.chargeTime}</li>
                                            }
                                        </ul>
                                    </div>
                                    <div className="AddToCart">
                                        <button className="border-0 rounded-2 px-5 py-2 text-white fw-bold mb-2" style={{ backgroundColor: isClicked === w.w_id ? 'green' : 'black' }} onClick={() => { dispatch(increment()); dispatch(addProduct(w)); dispatch(addPrice(w.w_price)); setIsClicked(w.w_id) }}>Add to cart</button>
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
export default Watch