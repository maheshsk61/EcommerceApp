import React from 'react'
import { fridgesData } from '../Fridge/Fridge_DATA'
import Dispatch from "../../Redux/Dispatch"
import { increment } from "../../Redux/Slices/Counter"
import { addProduct } from "../../Redux/Slices/Cart"
import { addPrice } from "../../Redux/Slices/TotalPrice"
import './Fridge.css'
const Fridge = () => {
    const { dispatch } = Dispatch()
    return (
        <div className='container-fluid'>
            <div className="row">
                {
                    fridgesData.map((f) =>
                        <div className="col-xs-12" key={f.f_id}>
                            <div className="Fridges d-flex overflow-x-hidden">
                                <img src={f.f_img} alt={f.f_name} className='img-fluid' />
                                <div className="d-flex flex-column">
                                    <h5 className="Name">{f.f_name}</h5>
                                    <h1 className='Price'>₹{f.f_price}</h1>
                                    <div className="Details">
                                        <ul className='list-unstyled'>
                                            <li><b>Capacity : </b>{f.f_details.capacity}</li>
                                            <li><b>Energy Star : </b>{f.f_details.star}</li>
                                            <li><b>Annual Energy Consumption : </b>{f.f_details.annualEnergyConsumption}</li>
                                            <li><b>Colour : </b>{f.f_details.colour}</li>
                                            <li><b>Voltage : </b>{f.f_details.voltage}</li>
                                            <li><b>Item Weight : </b>{f.f_details.itemWeight}</li>
                                            <li><b>Item Dimensions LxWxH : </b>{f.f_details.itemDimensionsLxWxH}</li>
                                        </ul>
                                    </div>
                                    <div className="AddToCart">
                                        <button className="border-0 bg-success rounded-2 px-5 py-2 text-white fw-bold mb-2" onClick={() => { dispatch(increment()); dispatch(addProduct(f)); dispatch(addPrice(f.f_price)) }}>Add to cart</button>
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

export default Fridge