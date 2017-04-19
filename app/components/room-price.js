import React from 'react';
import PropTypes from 'prop-types';

import styles from './components.styl';

const RoomPrice = ({price, currency, qtyNights, savings,})  => (
    <div className="room-price-container">
        <div className="qty-nights-container">
            <span><span className="qty-nights">{qtyNights}</span> night total</span>
            <span>({currency})</span>
        </div>
        <div className="room-price">
            <span className="dollar">$</span><span>{price}</span>
        </div>
        
        {(savings > 0) 
            ? <div className="room-savings">Save ${savings}~</div>
            : <div/>
        }
    </div>
);

RoomPrice.displayName = 'RoomPrice';

RoomPrice.propTypes = {
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    qtyNights: PropTypes.string.isRequired,
    savings: PropTypes.number,
};

module.exports = RoomPrice;
