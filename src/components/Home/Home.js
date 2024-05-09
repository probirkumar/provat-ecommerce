import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Home = () => {
    const products = useLoaderData();
    // console.log(products);
    return (
        <div className='home-container'>
            <div className="products-container">
            {
                products.map(product => <Product 
                    key = {product.id}
                    product = {product}
                ></Product>)
            }
            </div>
            <div className="orders-container">
                <h2>Orders Summary</h2>
            </div>
        </div>
    );
};

export default Home;