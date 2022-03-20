import React from "react";
import img1 from '../../img/header-logo.svg'
import img2 from '../../img/header-buy.svg'

const Header = () => {
    return (
        <header className="header">
            <img src={img1} alt="logo" className="header-logo" />
            <div className="header-content">
                <ul className="header-list">
                    <li className="header-lists">Home</li>
                    <li className="header-lists">About me</li>
                    <li className="header-lists">Products</li>
                    <li className="header-lists">Contact me</li>
                    <img src={img2} alt="" />
                </ul>
            </div>
        </header>
    )
}

export default Header;