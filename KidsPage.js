
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
                                <div class="card">
                                    <img src="Assets/k1.jpg" className="card-img-top compressed-img" alt="Kids Boys Denim Combo" />
                                    <div class="card-body">
                                        <h5 class="card-title"> Kids Boys Denim Combo</h5>
                                        <p class="card-text">2000₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Boys%20Denim%20Combo&price=2000&image=Assets/k1.jpg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>

                                    </div>
                                </div>
                            </td>
                            {/* Property 2*/}
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/k5.jpg" className="card-img-top compressed-img" alt="Kids Girls Frock" />
                                    <div class="card-body">
                                        <h5 class="card-title">Kids Girls Frock</h5>
                                        <p class="card-text">1299₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Girls%20Frock&price=1299&image=Assets/k5.jpg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>

                                    </div>
                                </div>
                            </td>
                            {/* Property 3*/}
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/k3.jpg" className="card-img-top compressed-img" alt="Kids Girls Denim"/>
                                        <div class="card-body">
                                            <h5 class="card-title">Kids Girls Denim</h5>
                                            <p class="card-text">2500₹</p>
                                            <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Girls%20Denim&price=2500&image=Assets/k3.jpg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>
                                           

                                        </div>
                                </div>
                            </td>
                            {/* Property 4*/}
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/k6.jpeg" className="card-img-top compressed-img" alt="Kids Girls Frock" />
                                    <div class="card-body">
                                        <h5 class="card-title">Kids Girls Frock</h5>
                                        <p class="card-text">899₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Kids%20Girls Frock&price=899&image=Assets/k6.jpeg"
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
                                    <img src="Assets/k8.webp" className="card-img-top compressed-img" alt="Kids Boys T-Shirt" />
                                    <div class="card-body">
                                        <h5 class="card-title">Kids Boys T-Shirt</h5>
                                        <p class="card-text">350₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Boys%20T-Shirt&price=350&image=Assets/k8.webp"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>

                                    </div>
                                </div>
                            </td>
                            {/* Property 6*/}
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/k9.jpg" className="card-img-top compressed-img" alt="Kids Boys Combo" />
                                    <div class="card-body">
                                        <h5 class="card-title">Kids Boys Combo</h5>
                                        <p class="card-text">1600₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Boys%20Combo&price=1600&image=Assets/k9.jpg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>

                                    </div>
                                </div>
                            </td>
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/k2.jpg" className="card-img-top compressed-img" alt="Kids Girls One-Piece" />
                                    <div class="card-body">
                                        <h5 class="card-title">Kids Girls One-Piece</h5>
                                        <p class="card-text">2100₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Girls%20One-Piece&price=2100&image=Assets/k2.jpg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>


                                    </div>
                                </div>
                            </td>
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/k7.webp" className="card-img-top compressed-img" alt="Kids Boys Kurta-Paijama" />
                                    <div class="card-body">
                                        <h5 class="card-title">Kids Boys Kurta-Paijama</h5>
                                        <p class="card-text">2199₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Boys%20Kurta-Paijama&price=2199&image=Assets/K7.webp"
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

