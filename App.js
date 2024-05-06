import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

 import MensPage from './MensPage';
import WomensPage from './WomensPage';
import KidsPage from './KidsPage';
import ProductPage from './ProductPage';
import ProductDetails from './ProductDetails';


function App() {
    return (
        <Router>
            <div className="App">
                <u><h1>Our Product </h1></u>
                <nav>
                    <Link to="/">All Products</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/mens">Men's</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/womens">Women's</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/kids">Kid's</Link>

                </nav>
                <Routes>
                    <Route path="/" element={<ProductPage />} />
                    <Route path="/mens" element={<MensPage />} />
                    <Route path="/womens" element={<WomensPage />} />
                    <Route path="/kids" element={<KidsPage />} />
                    <Route path="/ProductDetails" element={<ProductDetails/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
