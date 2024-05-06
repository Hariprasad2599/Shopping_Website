
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './ProductPage.css'; // Import CSS for styling
import './ProductDetails';

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
                            {/* Repeat the same pattern for other products */}
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
                            {/* Property 4*/}
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

                            {/* Property 5 */}
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
                            {/* Property 6*/}
                            <td className="product-cell">
                                <div class="card">
                                    <img src="Assets/Girl2.webp" className="card-img-top compressed-img" alt="KIDS KURTA PANT SET" />
                                    <div class="card-body">
                                        <h5 class="card-title">KIDS KURTA PANT SET</h5>
                                        <p class="card-text">2000₹</p>
                                        <a href="#" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faMoneyBill} /> Buy Now
                                        </a>
                                        <a href="./ProductDetails?product=KIDS%20KURTAPANTSET&price=2000&image=Assets/Girl2.webp"
                                            className="btn btn-success">
                                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                        </a>

                                    </div>
                                </div>
                            </td>
                            {/* Property 7*/}
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
                            {/* Property 8*/}
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
                            {/* Property 9*/}
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
                            {/* Property 10*/}
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
                            {/* Repeat the same pattern for other properties */}
                        </tr>
                        <tr>
                            {/* Property 11*/}
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
                            {/* Property 12*/}
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
                            {/* Property 13*/}
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
                            {/* Property 14*/}
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
                            {/* Property 15*/}
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
                            {/* Repeat the same pattern for other properties */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductPage;


