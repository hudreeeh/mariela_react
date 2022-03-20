import React from "react";

const Screen7Col = (props) => {
    return (
        <div className="screen7-col">
            <img src={props.img} alt="" />
            <p className="screen7-para">{props.text}</p>
            <p className="screen7-para2">{props.price}</p>
        </div>
    )
}

export default Screen7Col;