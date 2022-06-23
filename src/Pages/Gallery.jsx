import React from 'react';
import "../Style/gallery.css"

import one from '../Images/gal1.jpg'
import two from '../Images/gal2.jpg'
import three from '../Images/gal3.jpg'
import four from '../Images/gal4.jpg'
import five from '../Images/gal5.webp'
import six from '../Images/gal6.jpg'
import seven from '../Images/gal7.jpg'
import eight from '../Images/gal8.jpg'
import nine from '../Images/gal9.jpg'
import ten from '../Images/gal10.jpg'
import eleven from '../Images/gal11.webp'

const Gallery = () => {
    const imageArray = [one, two, three, four, five, six, seven, eight, nine, ten, eleven];

    return (
        <div className='gallery'>
            <div className="image-list">
                {imageArray.map((img, index) => 
                    <div key={index}>
                        <img src={img} alt="restaurant gallery" className="img" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;