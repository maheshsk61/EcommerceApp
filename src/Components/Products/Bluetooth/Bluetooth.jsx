import React, { useState } from "react"
import { bluetoothsData } from '../Bluetooth/Bluetooth_DATA'
import Dispatch from "../../Redux/Dispatch"
import { increment } from "../../Redux/Slices/Counter"
import { addProduct } from "../../Redux/Slices/Cart"
import { addPrice } from "../../Redux/Slices/TotalPrice"
import './Bluetooth.css'
const Bluetooth = () => {
    const { dispatch } = Dispatch()
    const [isClicked, setIsClicked] = useState()
    return (
        <div className='container-fluid'>
            <div className="row">
                {
                    bluetoothsData.map((b) =>
                        <div className="col-xs-12" key={b.b_id}>
                            <div className="Bluetooths d-flex overflow-x-hidden">
                                <img src={b.b_img} alt={b.b_name} className='img-fluid' />
                                <div className="d-flex flex-column">
                                    <h5 className="Name">{b.b_name}</h5>
                                    <h1 className='Price'>₹{b.b_price}</h1>
                                    <div className="Details">
                                        <ul className='list-unstyled'>
                                            <li><b>Bluetooth Version : </b>{b.b_details.version}</li>
                                            <li><b>Water Resistant : </b>{b.b_details.waterResistant}</li>
                                            <li><b>Charging Time : </b>{b.b_details.chargingTime}</li>
                                            <li><b>Play Time : </b>{b.b_details.playTime}</li>
                                        </ul>
                                    </div>
                                    <div className="AddToCart">
                                        <button className="border-0 rounded-2 px-5 py-2 text-white fw-bold mb-2" style={{ backgroundColor: isClicked === b.b_id ? 'green' : 'black' }} onClick={() => { dispatch(increment()); dispatch(addProduct(b)); dispatch(addPrice(b.b_price)); setIsClicked(b.b_id) }}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default Bluetooth