import React from 'react';
import PropTypes from 'prop-types';

const RoomPrice = ({price, currency, qtyNights, savings,})  => (
    <div>
        <span>{price}</span>
        <span>{currency}</span>
        <span>{qtyNights}</span>
        {savings && <span>{savings}</span>}
    </div>
);

RoomPrice.displayName = 'RoomPrice';

RoomPrice.propTypes = {
    price: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    qtyNights: PropTypes.string.isRequired,
    savings: PropTypes.string,
};

module.exports = RoomPrice;
