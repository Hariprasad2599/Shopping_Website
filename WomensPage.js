
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

import './ProductPage.css'; // Import CSS for styling

function ProductPage() {
    return (
        <div className="product-page">
            <div className="container mt-4">
                <table className="product-table">
                    <tbody>
                        <tr>
                            {/* Property 1*/}
                            <td className="product-cell">
                                <div className="card">
                                    <img src="Assets/wk3.webp" className="card-img-top compressed-img" alt="Womens Kurti" />
                                    <div className="card-body">
                                        <h5 className="card-title">Womens Kurti</h5>
                                        <p className="card-text">650₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Womens%20Kurti&price=650&image=Assets/wk3.webp"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </td>
                            {/* Property 2*/}
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/Round_Neck.webp" className="card-img-top compressed-img" alt="Round Neck Flare Mini" />
                                    <div class="card-body">
                                        <h5 class="card-title">Round Neck Flare Mini</h5>
                                        <p class="card-text">1099₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Round%20Flare Mini&price=1099&image=Assets/Round_Neck.webp"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </td>
                            {/* Property 3*/}
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/Collar Pleated.webp" className="card-img-top compressed-img" alt="Collar Pleated A Line Dress" />
                                    <div class="card-body">
                                        <h5 class="card-title">Collar Pleated A Line Dress</h5>
                                        <p class="card-text">1200₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Collar%20Pleated A Line Dress&price=1200&image=Assets/Collar Pleated.webp"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </td>
                            {/* Property 4*/}
                            <td className="product-cell">
                            <div class="card">
                                    <img src="Assets/Indian.jpeg" className="card-img-top compressed-img" alt="Anarkali kurtis" />
                                    <div class="card-body">
                                        <h5 class="card-title">Anarkali kurtis </h5>
                                        <p class="card-text">1599₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Anarkali%20Kurtis&price=1599&image=Assets/Indian.jpeg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </td>
                            {/* Repeat the same pattern for other properties */}
                        </tr>
                        <tr>
                            {/* Property 5*/}
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/wt13.jpg" className="card-img-top compressed-img" alt="Womens Tshirt" />
                                    <div class="card-body">
                                        <h5 class="card-title">Womens T-Shirt</h5>
                                        <p class="card-text">350₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Womens%20T-Shirt&price=350&image=Assets/wt13.jpg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>

                                    </div>
                                </div>
                            </td>
                            {/* Property 6*/}
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/wt7.webp" className="card-img-top compressed-img" alt="Womens Anarkali" />
                                    <div class="card-body">
                                        <h5 class="card-title">Womens Anarkali</h5>
                                        <p class="card-text">3999₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Womens%20Anarkali&price=3999&image=Assets/wt7.webp"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>

                                    </div>
                                </div>
                            </td>
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/wt2.jpg" className="card-img-top compressed-img" alt="Womens Kurti" />
                                    <div class="card-body">
                                        <h5 class="card-title">Womens Kurti-Top</h5>
                                        <p class="card-text">450₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Womens%20Kurti-Top&price=800&image=Assets/wt2.jpg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>


                                    </div>
                                </div>
                            </td>
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/wt11.jpg" className="card-img-top compressed-img" alt="Womens Denim-Shirt"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Womens Denim-Shirt</h5>
                                            <p class="card-text">999₹</p>
                                            <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Womens%20Denim-Shirt&price=999&image=Assets/Wt11.jpg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>

                                        </div>
                                </div>
                            </td>

                            {/* Repeat the same pattern for other properties */}
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductPage;

