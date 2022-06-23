import React from 'react';

import "../Style/reservation.css"

const Reservation = () => {
    return (
        <div className='make-reservation'>
            <h3>Make A Reservation</h3>
            <form action="" className="form-input">
                <div className="field control-form name-field">
                    <label for="name" className="label-name">Full name:</label> 
                    <input type="text" name="name" id="name" className="input-name" required placeholder='E.g. John Doe' />
                </div>
                <div className="field control-form email-field">
                    <label for="email" className="label-email">E-mail: </label> 
                    <input type="email" name="email" id='email' className="input-email" required placeholder='E.g. john.doe@gmail.com' />
                </div>
                <div className="field control phone-field">
                    <label for="phone" className="label-phone">Phone Number: </label> 
                    <input type="tel" name="phone" id='phone' className="input-phone" required placeholder='E.g. +40712343231' /> 
                </div>
                <div className="field control date-field">
                    <label for="date" className="label-date">Reservation date: </label> 
                    <input type="date" name="date" id='date' className="input-date" required /> 
                </div>
                <div className="field control persons-field">
                    <label for="no-persons" className="label-persons">Number of persons: </label> 
                    <input type="number" name="persons" id='persons' className="input-persons" required placeholder='E.g. 5 persons' /> 
                </div>
                <div className="field control time-field">
                    <label for="time" className="label-time">Reservation hour: </label> 
                    <input type="time" name="time" id='time' className="input-time" required /> 
                </div>
                <div className="field control submit-field">
                    <button type="submit" className="submit-reservation">Submit reservation</button>
                </div>
            </form>
        </div>
    );
};

export default Reservation;