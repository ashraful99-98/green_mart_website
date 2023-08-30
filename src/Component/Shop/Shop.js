import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';
import useCart from '../../hooks/useCart';
import Product from '../Product/Product';

import banner from '../../images/banner-06.jpg';
import banner1 from '../../images/banner-07.jpg';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('../products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);



    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <div className="py-5">
            <h4 className="span-text">Search Your Favourite Food Here</h4>
            <input
                type="Search"
                placeholder="Search For Food.."
                className="me-2 w-30"
                aria-label="Search" onClick={handleSearch} />
            <div class="container py-5">
                <div class="row">
                    <div class="col-sm-9">
                        <div class="row row-cols-2 row-cols-md-3 g-2">

                            {
                                displayProducts.map(product => <Product
                                    key={product.key}
                                    product={product}
                                    handleAddToCart={handleAddToCart}
                                >
                                </Product>)
                            }
                        </div>
                    </div>
                    {/* Cart  */}
                    <div class="col-sm-3">
                        <div class="row row-cols-1 row-cols-md-1 g-4">
                            <div className="cart-container">
                                <Cart cart={cart}>
                                    <Link to="/review">
                                        <button className="card-btn">Review Your Order</button>
                                    </Link>
                                </Cart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div class="row row-cols-2 row-cols-md-2 g-2">
                    <div class="col">
                        <img src={banner} alt="" />
                    </div>
                    <div class="col">
                        <img src={banner1} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Shop;