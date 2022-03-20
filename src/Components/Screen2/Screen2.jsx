import React from "react";
import img3 from '../../img/screen2-img.svg';

const Screen2 = () => {
    return (
        <div className="screen2">
            <div className="purple-block" />
            <div className="pink-block" />
            <div className="screen2-img">
                <img src={img3} alt="" />
            </div>
            <div className="screen2-content">
                <p className="screen2-para">new</p>
                <h1 className="screen2-title">Spring Cushion Collection 2019</h1>
                <button className="screen2-btn">buy now</button>
            </div>
        </div>
    )
}

export default Screen2;