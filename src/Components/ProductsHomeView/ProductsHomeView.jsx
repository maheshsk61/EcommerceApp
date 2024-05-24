import React from 'react'
import { productsData } from './ProductsHomeView_DATA'
import './ProductsHomeView.css'
import { Link } from 'react-router-dom'
const ProductsHomeView = () => {
    return (
        <div className='container-fluid'>
            <div className="row p-2">
                {
                    productsData.map((p) =>
                        <div className="col-xs-12 col-md-6 col-lg-4" key={p.p_id}>
                            <div className="Products overflow-hidden">
                                <Link to={`/${p.p_name}`} className='text-decoration-none text-dark'>
                                    <img className='img-fluid' alt={p.p_name} src={p.p_img} />
                                    <h1 className='text-center'>{p.p_name}</h1>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProductsHomeView