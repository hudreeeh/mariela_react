import React from "react";

const FooterItem = (props) => {
    return (
        <div className="footer-col">
            <img src={props.img} alt="" />
            <p className="footer-para">{props.text}</p>
            <p className="footer-para2">{props.text2}</p>
        </div>
    )
}

export default FooterItem;