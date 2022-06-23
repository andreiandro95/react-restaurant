import React from 'react';
import "../Style/homepage.css";

import imageThree from "../Images/3.jpg";
import imageFour from "../Images/4.jpg";
import imageFive from "../Images/5.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const CLIENTS_OPINIONS = [
    {opinion: "The author’s cocktails here should definitely try everything, you will not regret it, the bartenders know their stuff.", client: "ADAM ANDERSON"},
    {opinion: "Loved it! Solyanka awesome! The portions are large. Served quickly and politely. Nice interior, pleasant atmosphere.", client: "NICOLAS TRAVIS"},
    {opinion: "We went to dinner with mom today, I liked everything very much! Delicious food, pleasant atmosphere, friendly staff.", client: "NICOL FLORAND"},
    {opinion: "Thank you for a wonderful evening, elegant design, excellent service, cozy atmosphere and positive emotions!", client: "MOLLY MONT"},
    {opinion: "The owner is very cool. Very good food, the fries are from real potatoes, not the frozen ones. They cook american style and I just love it! Oh, and the prices...", client: "ANN"},
    {opinion: "Always delicious pizza and traditional dishes not to be forgotten, a clean quiet place with impeccable service", client: "Anna Cellini"},
    {opinion: "Good food, polite servers, clean bathrooms, you can sit outside during summer.", client: "Roxana Humeniuc"}
];

const Homepage = () => {
    const [opinionIndex, setOpinionIndex] = useState(0);

    const prevOpinionIndex = () => {
        if(opinionIndex > 0){
            setOpinionIndex(opinionIndex - 1);
        }
        console.log(opinionIndex);
    }

    const nextOpinionIndex = () => {
        if(opinionIndex < CLIENTS_OPINIONS.length - 1){
            setOpinionIndex(opinionIndex + 1)
        }
        console.log(opinionIndex)
    }

    return (
        <>
           <div className="presentation">
                <div className="presentation-text">
                    <div className="line">
                        <p className="orange-line"></p>
                    </div>
                    <div className="title">
                        <h3>Gourmet and delicious cuisine</h3>
                    </div>
                    <div className="short-stoy">
                    <p> After the heist, she bought a facelift in a Bel Air basement for $20k, and spent the rest of her forty-seven.</p>
                    </div>
                </div>
            </div>
            <div className="about-restaurant">
                <div className="about-restaurant-space">
                    <div className="about-restaurant-title">
                        <p>ABOUT RESTAURANT</p>
                        <div className="line">
                            <p className="orange-line"></p>
                        </div>
                    </div>
                    <div className="about-restaurant-text">
                        <p>Exquisite and fashionable cuisine from the famous cooks. Try our dishes and you will never want something else. Our cooks prepare new and unusual dishes every month, so the range is always new. </p>
                    </div>
                    <div className="about-restaurant-btn">
                        <button type="button" className="about-restaurant-read-btn">Read More</button>
                    </div>
                    <hr />
                </div>
                <div className="infos">
                    <div className="best-interiors">
                        <h3>BEST INTERIORS</h3>
                        <p>Integer laoreet non felis sit amet pharetra. Integer mollis eget felis non finibus quia consequuntur magni dolores eos qui </p>
                    </div>
                    <div className="delicios-dishes">
                        <h3>DELICIOUS DISHES</h3>
                        <p>Enison turducken biltong sausage tenderloin, shankle ham hock leberkas ground round tail corned beef Tri-tip ground </p>
                    </div>
                    <div className="exclusive-service">
                        <h3>EXCLUSIVE SERVICE</h3>
                        <p>Tail pig pork belly, capicola biltong turducken prosciutto buffalo chuck bacon. Jowl prosciutto spare ribs swine shankle pork</p>
                    </div>
                </div>
            </div>
            <div className="booking">
                <div className="booking-text">
                    <div className="line">
                        <p className="orange-line">
                        </p>
                    </div>
                    <h3>WE MADE A NEW GOURMET MENU</h3>
                    <p>New tasty and elegant menu will not leave you
                        indifferent to our dishes</p>
                    <a href="reservation.html">Book A Table</a>
                </div>
            </div>
            <div className="new-menu">
                <div className="new-menu-title">
                    <p>NEW IN MENU</p>
                </div>
                <div className="line">
                    <p className="orange-line">
                    </p>
                </div>
                <div className="new-menu-text">
                    <p>Try the delicious new dishes from our chef. He brought these recipes from Italy and Spain. </p>
                </div>
                <div className="new-plates-menu">
                    <div className="plate-one">
                        <img src={imageThree} alt="plate" />
                        <div className="name-price">
                            <p>PUMPKIN BAY</p>
                            <p>36$</p>
                        </div>
                        <p>Fish, horseradish, oregano, soy</p>
                    </div>
                    <div className="plate-two">
                        <img src={imageFour} alt="plate" />
                        <div className="name-price">
                            <p>PIZZA SALAD</p>
                            <p>25$</p>
                        </div>
                        <p>Fish, horseradish, oregano, soy</p>
                    </div>
                    <div className="plate-three">
                        <img src={imageFive} alt="plate" />
                        <div className="name-price">
                            <p>FRUIT SOUP</p>
                            <p>32$</p>
                        </div>
                        <p>Fish, horseradish, oregano, soy</p>
                    </div>
                </div>
            </div>
            <div className="menu-presentation">
                <div className="menu-text">
                    <div className="line">
                        <p className="orange-line">
                        </p>
                    </div>
                    <h3>WE MADE A NEW GOURMET MENU</h3>
                    <p>New tasty and elegant menu will not leave you
                        indifferent to our dishes</p>
                    <a href="menu.html">Our Menu</a>
                </div>
            </div>
            <div className="numbers-about-us">
                <div className="numbers-about-us-text">
                    <div className="no-clients">
                        <h3>5.612</h3>
                        <p>CLIENTS</p>
                    </div>
                    <div className="no-CHEF">
                        <h3>127</h3>
                        <p>CHEF TEAM</p>
                    </div>
                    <div className="no-ORIGINAL ">
                        <h3>312</h3>
                        <p>ORIGINAL DHISHES</p>
                    </div>
                    <div className="no-wine">
                        <h3>604</h3>
                        <p>WINE COLLECTION</p>
                    </div>
                </div>
            </div>
            <div className="clients-presentation">
                <div className="clients-text">
                    <div className="line">
                        <p className="orange-line">
                        </p>
                    </div>
                    <h3>WHAT DO OUR
                        VISITORS SAY?</h3>
                    <p>Reviews of our regular visitors and guests speak for themselves</p>
                </div>
            </div>
            <div className="slider-clients-opinion">
                <div className="opinion-place">
                    <button type="button" className="prev-btn client-btn" onClick={prevOpinionIndex}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <button type="button" className="next-btn client-btn" onClick={nextOpinionIndex}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                    <p className="client-opinion">
                        {CLIENTS_OPINIONS[opinionIndex].opinion}
                    </p>
                    <p className="client-name">
                        {CLIENTS_OPINIONS[opinionIndex].client}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Homepage;