import React from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';




const Shop = () => {
    return(
        <>
        <div>
            <Link to="/Home" className="home-path" >ELYSIUM</Link>
                <Link to="/Shop" className="shop-path" >SHOP</Link>
                <Link to="/Programs" className="programs-path" >PROGRAMS</Link>
                <Link to="/About" className="about-path" >ABOUT</Link>
        </div>

        <div>
            <div className="product-box-1" ></div>
            <div className="product-box-2" ></div>
            <div className="product-box-3" ></div>
        </div>

        </>
    )
};

export default Shop