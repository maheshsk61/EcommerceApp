import React, { useState } from "react"
import { tvData } from "./TV_DATA"
import Dispatch from "../../Redux/Dispatch"
import { increment } from "../../Redux/Slices/Counter"
import { addProduct } from "../../Redux/Slices/Cart"
import { addPrice } from "../../Redux/Slices/TotalPrice"
import './TV.css'
const Tv = () => {
    const { dispatch } = Dispatch()
    const [isClicked, setIsClicked] = useState()
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    tvData.map((t) =>
                        <div className="col-xs-12" key={t.id}>
                            <div className="Tv d-flex overflow-x-hidden">
                                <img src={t.t_img} alt={t.t_img} className="img-fluid" />
                                <div className="d-flex flex-column">
                                    <h5 className="Name">{t.t_name}</h5>
                                    <h1 className="Price">₹{t.t_price}</h1>
                                    <div className="Details">
                                        <ul className='list-unstyled'>
                                            <li><b>Size : </b>{t.t_details.size}</li>
                                            <li><b>Color : </b>{t.t_details.color}</li>
                                            <li><b>Resolution : </b>{t.t_details.resolution}</li>
                                            <li><b>Processor : </b>{t.t_details.processor}</li>
                                            <li><b>RAM : </b>{t.t_details.ram}</li>
                                            <li><b>ROM : </b>{t.t_details.rom}</li>
                                            <li><b>OS : </b>{t.t_details.os}</li>
                                        </ul>
                                    </div>
                                    <div className="AddToCart">
                                        <button className="border-0 rounded-2 px-5 py-2 text-white fw-bold mb-2" style={{ backgroundColor: isClicked === t.t_id ? 'green' : 'black' }} onClick={() => { dispatch(increment()); dispatch(addProduct(t)); dispatch(addPrice(t.t_price)); setIsClicked(t.t_id) }}>Add to cart</button>
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
export default Tv