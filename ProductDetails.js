
import React, { useState, useEffect } from 'react';

function ProductDetails() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImage, setProductImage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('product');
        const price = parseFloat(urlParams.get('price'));
        const image = urlParams.get('image');

        setProductName(name);
        setProductPrice(price);
        setProductImage(image);
        setTotalPrice(price);
    }, []);

    const updateTotal = (value) => {
        const newQuantity = parseInt(value);
        setQuantity(newQuantity);
        const newTotalPrice = newQuantity * productPrice;
        setTotalPrice(newTotalPrice);
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            updateTotal(quantity - 1);
        }
    }

    const incrementQuantity = () => {
        updateTotal(quantity + 1);
    }

    return (
        <div>
            <style>
                {`
                .product-image {
                    max-width: 150%; /* Set maximum width */
                    max-height: 350px; /* Set maximum height */
                    border-radius: 15px;
                }
                `}
            </style>
            <h1>Product Details</h1>
            <div id="product-details">
                <img className="product-image" src={productImage} alt="Product Image"/>
                <p>Product: {productName}</p>
                <p>Price: {productPrice.toFixed(2)}₹</p>
            </div>

            {/* Quantity control */}
            <div className="quantity-control">
                <button className="quantity-button" onClick={decrementQuantity}>-</button>
                <input type="number" className="quantity-input" name="quantity" min="1" value={quantity} onChange={(e) => updateTotal(e.target.value)} />
                <button className="quantity-button" onClick={incrementQuantity}>+</button>
            </div>
            <p>Total Price: <span>{totalPrice.toFixed(2)}₹</span></p>
        </div>
    );
}

export default ProductDetails;
