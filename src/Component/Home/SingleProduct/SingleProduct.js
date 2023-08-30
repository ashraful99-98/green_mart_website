import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SingleProduct';

const SingleProduct = (props) => {
    const { name, img, price, stock } = props.product;
    const faRignt = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div class="col">
            <div class="card" className="card-info">
                <div className="card">
                    <img src={img} class="card-img" alt="" />
                    <div class="card p-2">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Stock: {stock}</p>
                        <p class="card-text text-danger font-">${price}</p>
                        <Link to="/shop" className="card-btn">Shop Now {faRignt}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;