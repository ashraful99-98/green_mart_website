import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { useState } from 'react';
import useCart from '../../hooks/useCart';
import { useEffect } from 'react';
import { addToDb } from '../../utilities/fakedb';


const Product = (props) => {

    const { name, img, price, Availability, weight, stock } = props.product;


    const star = <FontAwesomeIcon icon={faStar} />

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

    return (
        <div class="col">
            <div class="card" className="card-info">
                <div className="cart-img">
                    <img src={img} class="card-img-top" alt="" />
                </div>
                <div class="card-body" className="card-body">
                    <h4 class="card-title" className="card-h4">{name}</h4>
                    <p class="card-text" className="card-text-info">(Weight: {weight})</p>
                    <p class="card-text">Availability: {Availability}</p>
                    <p class="card-text">{stock} avilable in stock</p>
                    <div className="star-icon">
                        <p className="text-warning">{star}{star}{star}{star}{star}</p>
                    </div>
                    <h5 className="text-danger">${price}</h5>
                </div>
                <div class="card-footer" className="card-footer">
                    <button
                        onClick={() => props.handleAddToCart(props.product)}
                        className="card-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;