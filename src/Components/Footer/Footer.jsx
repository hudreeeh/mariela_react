import React from "react";
import FooterItem from "./FooterItem/FooterItem";
import img17 from '../../img/footer1.svg';
import img18 from '../../img/footer2.svg';
import img19 from '../../img/footer3.svg';
import FooterBlock2 from "./FooterBlock2/FooterBlock2";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-row">
                <FooterItem
                img={img17}
                text='Safe shopping'
                text2='Buy with confidence'
                />
                <FooterItem
                img={img18}
                text='Fast shipping'
                text2='Get your product fast'
                />
                <FooterItem
                img={img19}
                text='Satisfaction guarantee'
                text2='Or get your money back'
                />
            </div>
            <FooterBlock2/>
        </footer>
    )
}

export default Footer;