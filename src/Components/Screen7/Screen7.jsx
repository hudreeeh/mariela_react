import React from "react";
import Screen7Col from "./Screen7Col/Screen7Col";
import img11 from '../../img/screen7-1.svg';
import img12 from '../../img/screen7-2.svg';
import img13 from '../../img/screen7-3.svg';
import img14 from '../../img/screen7-4.svg';
import img15 from '../../img/screen7-5.svg';
import img16 from '../../img/screen7-6.svg';

const Screen7 = () => {
    return (
        <div className="screen7">
            <div className="screen7-row">
                <Screen7Col
                img={img11}
                text='Plated Cushion'
                price='$ 19.99 USD'
                />
                <Screen7Col
                img={img12}
                text='Silver Cushion'
                price='$ 19.99 USD'
                />
                <Screen7Col
                img={img13}
                text='Deep Blue Cushion'
                price='$ 19.99 USD'
                />
                <Screen7Col
                img={img14}
                text='Pink Cushion'
                price='$ 19.99 USD'
                />
                <Screen7Col
                img={img15}
                text='Black Cushion'
                price='$ 19.99 USD'
                />
                <Screen7Col
                img={img16}
                text='Green Cushion'
                price='$ 19.99 USD'
                />
            </div>
        </div>
    )
}

export default Screen7;