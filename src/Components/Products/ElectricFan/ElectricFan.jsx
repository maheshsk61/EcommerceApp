import React, { useState } from "react"
import { electricFansData } from '../ElectricFan/ElectricFan_DATA'
import Dispatch from "../../Redux/Dispatch"
import { increment } from "../../Redux/Slices/Counter"
import { addProduct } from "../../Redux/Slices/Cart"
import { addPrice } from "../../Redux/Slices/TotalPrice"
import './ElectricFan.css'
const ElectricFan = () => {
    const { dispatch } = Dispatch()
    const [isClicked, setIsClicked] = useState()
    return (
        <div className='container-fluid'>
            <div className="row">
                {
                    electricFansData.map((e) =>
                        <div className="col-xs-12" key={e.e_id}>
                            <div className="ElectricFans d-flex overflow-x-hidden">
                                <img src={e.e_img} alt={e.e_name} className='img-fluid' />
                                <div className="d-flex flex-column">
                                    <h5 className="Name">{e.e_name}</h5>
                                    <h1 className='Price'>₹{e.e_price}</h1>
                                    <div className="Details">
                                        <ul className='list-unstyled'>
                                            <li><b>Number of Blades : </b>{e.e_details.numberOfBlades}</li>
                                            <li><b>Blade Length : </b>{e.e_details.bladeLength}</li>
                                            <li><b>Blade Material : </b>{e.e_details.bladeMaterial}</li>
                                            <li><b>Special Feature : </b>{e.e_details.specialFeature}</li>
                                            <li><b>Item Weight : </b>{e.e_details.itemWeight}</li>
                                        </ul>
                                    </div>
                                    <div className="AddToCart">
                                        <button className="border-0 rounded-2 px-5 py-2 text-white fw-bold mb-2" style={{ backgroundColor: isClicked === e.e_id ? 'green' : 'black' }} onClick={() => { dispatch(increment()); dispatch(addProduct(e)); dispatch(addPrice(e.e_price)); setIsClicked(e.e_id) }}>Add to cart</button>
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

export default ElectricFan