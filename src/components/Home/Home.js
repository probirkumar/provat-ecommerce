
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const products = useLoaderData();
    // console.log(products);
    const [cart, setCart] = useState([]);

    const handleAddCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='home-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddCart={handleAddCart}
                    ></Product>)
                }
            </div>
            <div className="orders-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;