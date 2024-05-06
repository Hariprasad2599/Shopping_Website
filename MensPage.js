import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './ProductPage.css'; // Import CSS for styling

function ProductPage() {
    return (
        <div className="product-page">
            <div className="container mt-4">
                <table className="product-table">
                    <tbody>
                        <tr>
                            {/* Property 1 */}
                            <td className="product-cell">
                                <div className="card">
                                    <img src="Assets/mp11.webp" className="card-img-top compressed-img" alt="Jeans" />
                                    <div className="card-body">
                                        <h5 className="card-title">Men Jeans</h5>
                                        <p className="card-text">600₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <Link to={{ pathname: "./ProductDetails", search: "?product=Men%20Jeans&price=600&image=Assets/mp11.webp" }} className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </Link>
                                    </div>
                                </div>
                            </td>

                            {/* Property 2 */}
                            <td className="product-cell">
                                <div className="card">
                                    <img src="Assets/mp6.webp" className="card-img-top compressed-img" alt="Pant" />
                                    <div className="card-body">
                                        <h5 className="card-title">Mens Formal Pant</h5>
                                        <p className="card-text">800₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Mens%20Formal%20Pant&price=800&image=Assets/mp6.webp"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </td>


                            {/* Property 3*/}
                            <td className="product-cell">
                                <div className="card">
                                    <img src="Assets/sm13.webp" className="card-img-top compressed-img" alt="Mens Shirt" />
                                    <div className="card-body">
                                        <h5 className="card-title">Mens Formal</h5>
                                        <p className="card-text">699₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Mens%20Formal&price=699&image=Assets/sm13.webp"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </td>

                            {/* Property 4 */}
                            <td className="product-cell">
                                <div className="card">
                                    <img src="Assets/sm11.jpg" className="card-img-top compressed-img" alt="Mens Formal Shirt" />
                                    <div className="card-body">
                                        <h5 className="card-title">Mens Formal Shirt</h5>
                                        <p className="card-text">599₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Mens%20Formal%20Shirt&price=800&image=Assets/sm11.jpg"
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
                                    <img src="Assets/sm12.jpg" className="card-img-top compressed-img" alt="Mens Shirt" />
                                    <div class="card-body">
                                        <h5 class="card-title">Mens Formal-Suit</h5>
                                        <p class="card-text">4999₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Mens%20Formal-Suit&price=4999&image=Assets/sm12.jpg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>

                                    </div>
                                </div>
                            </td>


                            {/* Property 6*/}
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/sm17.jpg" className="card-img-top compressed-img" alt="Mens CasualShirt" />
                                    <div class="card-body">
                                        <h5 class="card-title">Mens Casual-Shirt</h5>
                                        <p class="card-text">799₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Mens%20Casual-Shirt&price=799&image=Assets/sm17.jpg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>

                                    </div>
                                </div>
                            </td>
                            {/* Property 8*/}
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/sm16.jpg " className="card-img-top compressed-img" alt="Mens CasualShirt" />
                                    <div class="card-body">
                                        <h5 class="card-title">Mens Casual-Shirt</h5>
                                        <p class="card-text">749₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Mens%20Casual-Shirt&price=749&image=Assets/sm16.jpg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>

                                    </div>
                                </div>

                            </td>
                            {/* Property 9*/}
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/tshirt.jpeg" className="card-img-top compressed-img" alt="Mens T-Shirt" />
                                    <div class="card-body">
                                        <h5 class="card-title">Mens T-Shirt</h5>
                                        <p class="card-text">399₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=Mens%20T-Shirt&price=399&image=Assets/tshirt.jpeg"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>
                                    </div>
                                </div>
                            </td>
                            {/* Repeat the same pattern for other properties */}
                        </tr>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductPage;

