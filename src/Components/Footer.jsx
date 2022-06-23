import React from 'react';
import logo from '../Images/logo.png'
import "../Style/footer.css";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="presentation-restaurant">
                    <div className="image">
                        <img src={logo} alt="logo restaurant" />
                    </div>
                    <div className="text">
                        Stylish and fashionable restaurant with exquisite dishes from different worlds, stylish interiors will make your mood real and impressive.
                    </div>
                </div>
                <div className="first-address">
                    <div className="name">
                        <h3>NEW YORK</h3>
                    </div>
                    <div className="line">
                        <p className="color-line"></p>
                    </div>
                    <p className='adress'>Eighth Avenue 385, New York
                            benedicta@website.com
                            +1 800 876 54 23
                    </p>
                </div>
                <div className="second-address">
                    <div className="name">
                        <h3>LONDON</h3>
                    </div>
                    <div className="line">
                        <p className="color-line"></p>
                    </div>
                    <p className="adress">
                        Bridge Avenue 23/1, London
                        benedicta@website.com
                        +1 960 316 48 34 
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer;