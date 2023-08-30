import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import vegitableBanner from '../../images/banner/banner-05.jpg';
import slider1 from '../../images/slider/slider-1.jpg';
import slider2 from '../../images/slider/slider-2.jpg';
import product1 from '../../images/product/cat-01.jpg';
import product2 from '../../images/product/cat-02.jpg';
import product3 from '../../images/product/cat-03.jpg';
import product4 from '../../images/product/cat-04.jpg';
import product5 from '../../images/product/cat-05.jpg';
import product6 from '../../images/product/cat-06.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('../products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="slider-img"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="slider-info">
                            <h1>Farm Fresh Fo Vegetables & 100% Organic.</h1>
                            <p>Always fresh organic products..</p>
                            <div>
                                <Link className="slider-btn" to="/shop">Shop Now</Link>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slider-img"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="slider-info">
                            <h1> Farm Fresh Fo Vegetables & 100% Organic.
                            </h1>
                            <p>Always fresh organic products.</p>
                            <div>
                                <Link className="slider-btn" to="/shop">Shop Now</Link>
                            </div>


                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container fluid>
                <Row>
                    <Col sm={12} lg={12} className="freeShipping-col">
                        <h5>Free Shipping On All Orders Over $99. <span className="span-text">#staysafecovid19</span></h5>
                    </Col>
                </Row>
            </Container>

            <Container>
                <div class="container py-5">
                    <h2 className="span-text align-left pb-2">Daily Chilled Vegetables</h2>
                    <h4 className="pb-2">Shop Now</h4>
                    <div class="row row-cols-1 row-cols-md-4 g-3">
                        {
                            products.map(product => <SingleProduct
                                key={product.key}
                                product={product}
                            >
                            </SingleProduct>)
                        }
                    </div>
                </div>
            </Container>


            <Container>
                <Row className="vegetables-div">
                    <Col sm={12} lg={6}>
                        <div className="vegetables-img">
                            <img src={vegitableBanner} alt="" />
                        </div>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className="vegetables-info">
                            <h1 className="vegetables-text">Organic Vegetables Everyday</h1>
                            <h5 className="vegetables-text-h4">Your online resource of healthy recipes.</h5>
                            <p className="vegetables-text">Is organic food more nutritious than regular food? Organic foods are not healthier, per se, in terms of nutrients. You are still getting the same benefits in conventionally grown foods as you are in organic foods.</p>
                            <div>
                                <Link className="vegetables-btn" to="/shop">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="category-section">
                <Container>
                    <div className="category-shop">
                        <h2>Shop By Category</h2>
                        <Link to="/shop" className="shop-all">Shop all categories</Link>
                    </div>
                    <div class="container">
                        <div class="row row-cols-3 row-cols-md-6 py-5">
                            <div class="col border p-2 bg-white">
                                <img src={product1} alt="" />
                                <h5>Fruit</h5>
                            </div>
                            <div class="col border p-2 bg-white">
                                <img src={product2} alt="" />
                                <h5>Vegetables</h5>
                            </div>
                            <div class="col border p-2 bg-white">
                                <img src={product3} alt="" />
                                <h5>Meat & Poultry</h5>
                            </div>
                            <div class="col border p-2 bg-white">
                                <img src={product4} alt="" />
                                <h5>Frish & Seafood</h5>
                            </div>
                            <div class="col border p-2 bg-white">
                                <img src={product5} alt="" />
                                <h5>Dairy & Egges</h5>
                            </div>
                            <div class="col border p-2 bg-white">
                                <img src={product6} alt="" />
                                <h5>Milk & Driks</h5>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        </div>
    );
};

export default Home;