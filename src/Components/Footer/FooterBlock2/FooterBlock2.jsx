import React from "react";
import img20 from '../../../img/footer4.svg';

const FooterBlock2 = () => {
    return (
        <div className="footer-block2">
            <img src={img20} alt="" />
            <ul className="footer-lists">
                <li className="footer-list">Home</li>
                <li className="footer-list">About me</li>
                <li className="footer-list">Products</li>
                <li className="footer-list">Contact me</li>
            </ul>
        </div>
    )
}

export default FooterBlock2;