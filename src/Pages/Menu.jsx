import React from 'react';

import "../Style/menu.css";

import seventeen from '../Images/17.webp'
import eighteen from '../Images/18.jpg'
import nineteen from '../Images/19.jpg'
import twenty from '../Images/20.jpg'
import twentyOne from '../Images/21.jpg'
import twentyTwo from '../Images/22.jpg'
import twentyThree from '../Images/23.jpg'
import twentyFive from '../Images/25.jpg'
import twentySix from '../Images/26.jpg'
import ten from '../Images/10.jpg'
import eleven from '../Images/11.jpg'
import twelve from '../Images/12.jpg'
import thirteen from '../Images/13.jpg'
import fourteen from '../Images/14.jpg'
import fiveteen from '../Images/15.webp'
import sixteen from '../Images/16.jpg'

const Menu = () => {
    return (
        <div className='menu'>
            <div className="starters">
                <div className="starter-title">
                    <h2>Starters</h2>
                </div>
                <div className="starters-dishes">
                    <div className="starter-one">
                        <img src={ten} alt="Usuzukuri" />
                        <div className="text">
                            <div className="title-price">
                                <p>Usuzukuri </p>
                                <p>$35</p>
                            </div>
                            <p>Very thin sliced Fluke with Ponzu sauce</p>
                        </div>
                    </div>
                    <div className="starter-two">
                        <img src={eleven} alt="Nama Uni" />
                        <div className="text">
                            <div className="title-price">
                                <p>Nama Uni</p>
                                <p>$35</p>
                            </div>
                            <p>Fresh Sea Urchin Sashimi</p>
                        </div>
                    </div>
                    <div className="starter-three">
                        <img src={twelve} alt="Ankimo" />
                        <div className="text">
                            <div className="title-price">
                                <p>Ankimo </p>
                                <p>$30</p>
                            </div>
                            <p>Monk Fish Liver Pate with Ponzu Sauce</p>
                        </div>
                    </div>
                    <div className="starter-four">
                        <img src={thirteen} alt="Seaweed Salad" />
                        <div className="text">
                            <div className="title-price">
                                <p>Seaweed Salad  </p>
                                <p>$14</p>
                            </div>
                            <p>Assorted Seaweed with Special Sweet &amp; Sour sauce</p>
                        </div>
                    </div>
                    <div className="starter-four">
                        <img src={fourteen} alt="Nameko Oroshi" />
                        <div className="text">
                            <div className="title-price">
                                <p>Nameko Oroshi   </p>
                                <p>$22</p>
                            </div>
                            <p>Nameko Mushrooms with Grated Japanese Radish Garnish</p>
                        </div>
                    </div>
                    <div className="starter-five">
                        <img src={fiveteen} alt="Aka Dashi" />
                        <div className="text">
                            <div className="title-price">
                                <p>Aka Dashi</p>
                                <p>$7</p>
                            </div>
                            <p>Red Soybean Paste Soup with Nameko Mushrooms</p>
                        </div>
                    </div>
                    <div className="starter-six">
                        <img src={sixteen} alt="Negi Toro" />
                        <div className="text">
                            <div className="title-price">
                                <p>Negi Toro </p>
                                <p>$35</p>
                            </div>
                            <p>Fatty Tuna Tartare with Scallions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lunch">
                <div className="lunch-title">
                    <h2>Lunch</h2>
                </div>
                <div className="lunch-dishes">
                    <div className="lunch-one">
                        <img src={seventeen} alt="Chirashi Special" />
                        <div className="text">
                            <div className="title-price">
                                <p>Chirashi Special  </p>
                                <p>$90</p>
                            </div>
                            <p>Deluxe Bowl of Sushi Rice with Assorted Sashimi Toppings</p>
                        </div>
                    </div>
                    <div className="lunch-two">
                        <img src={eighteen} alt="Tekka Ju" />
                        <div className="text">
                            <div className="title-price">
                                <p>Tekka Ju </p>
                                <p>$38</p>
                            </div>
                            <p>Fresh Sea Urchin Sashimi</p>
                        </div>
                    </div>
                    <div className="lunch-three">
                        <img src={nineteen} alt="Norimaki Special" />
                        <div className="text">
                            <div className="title-price">
                                <p>Norimaki Special</p>
                                <p>$36</p>
                            </div>
                            <p>Three Kinds of Rolls</p>
                        </div>
                    </div>
                    <div className="lunch-four">
                        <img src={twenty} alt="Sashimi Plate" />
                        <div className="text">
                            <div className="title-price">
                                <p>Sashimi Plate </p>
                                <p>$90</p>
                            </div>
                            <p>Chef's Selection of Twelve Pieces of Sashimi</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dinner">
                <div className="dinner-title">
                    <h2>Lunch</h2>
                </div>
                <div className="dinner-dishes">
                    <div className="dinner-one">
                        <img src={twentyOne} alt="Sushi Dinner" />
                        <div className="text">
                            <div className="title-price">
                                <p>Sushi Dinner</p>
                                <p>$160</p>
                            </div>
                            <p>Appetizer, Soup, Small Sashimi Plate, Assorted Sushi Plate, and Ice Cream</p>
                        </div>
                    </div>
                    <div className="dinner-two">
                        <img src={twentyTwo} alt="Kurumazushi Dinner" />
                        <div className="text">
                            <div className="title-price">
                                <p>Kurumazushi Dinner  </p>
                                <p>$160</p>
                            </div>
                            <p>Appetizer, Soup, Assorted Sashimi Plate, Assorted Sushi Plate, and Ice Cream</p>
                        </div>
                    </div>
                    <div className="dinner-three">
                        <img src={twentyThree} alt="Chirashi Dinner" />
                        <div className="text">
                            <div className="title-price">
                                <p>Chirashi Dinner </p>
                                <p>$300</p>
                            </div>
                            <p>Soup, Assorted Fish &amp; Vegetables over a Bowl of Sushi Rice, and Ice Cream</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dessert">
                <div className="dessert-title">
                    <h2>Dessert</h2>
                </div>
                <div className="dessert-dishes">
                    <div className="dessert-one">
                        <img src={twentyFive} alt="Fresh Seasonal Fruit" />
                        <div className="text">
                            <div className="title-price">
                                <p>Fresh Seasonal Fruit </p>
                                <p>$9</p>
                            </div>
                            <p>Please ask your server for the day's selection</p>
                        </div>
                    </div>
                    <div className="dessert-two">
                        <img src={twentySix} alt="Yokan" />
                        <div className="text">
                            <div className="title-price">
                                <p>Yokan</p>
                                <p>$8</p>
                            </div>
                            <p>Japanese Traditional Red Bean Cake</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;