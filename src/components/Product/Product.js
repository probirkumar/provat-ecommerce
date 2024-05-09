import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const {img, price, name, shipping} = product;
    return (
        <div className='product-container'>
            <div className="product-wrapper-container">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="product-details-container">
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p><small>Shipping: {shipping}</small></p>
            </div>
            </div>
        </div>
    );
};

export default Product;