import React from 'react';
import './Product.css';

const Product = ({ product, handleAddCart }) => {
    const { img, price, name, shipping } = product;
    console.log()
    return (
        <div className='product-container'>
            <div className="product-wrapper-container">
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
                <div className="product-details-container">
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <button onClick={()=> handleAddCart(product)} className='btn-add'>Add Cart</button>
                </div>
                
            </div>
        </div>
    );
};

export default Product;