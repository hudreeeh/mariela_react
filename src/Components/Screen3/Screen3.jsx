import React from "react";
import img4 from '../../img/screen3-1.svg';
import img5 from '../../img/screen3-2.svg';
import img6 from '../../img/screen3-3.svg';


const Screen3 = () => {
    return (
        <div className="screen3">
            <div className="screen3-content">
                <h2 className="screen3-title">I'm a cushion designer</h2>
                <p className="screen3-para">Based in San Francisco, California I design trendy and fashion Cushions, <br /> since
                    I
                    have memory I always had a tendency to design and illustration.</p>
                <button className="screen3-btn">Learn More</button>
            </div>
            <div className="screen3-row">
                <div className="screen3-col">
                    <img src={img4} alt="" />
                    <p className="col-para">About me</p>
                    <a href className="col-link">Learn more</a>
                </div>
                <div className="screen3-col">
                    <img src={img5} alt="" />
                    <p className="col-para">About me</p>
                    <a href className="col-link">Learn more</a>
                </div>
                <div className="screen3-col">
                    <img src={img6} alt="" />
                    <p className="col-para">About me</p>
                    <a href className="col-link">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default Screen3;