import React from 'react';
import PropTypes from 'prop-types';

import RoomPrice from './room-price';

const Room = ({
    title, address, imageUrl, rating, ratingType,
    price, currency, qtyNights, savings,
})  => (
    <div>
        <RoomPrice {...{price, currency, qtyNights, savings,}}/>
    </div>
);

Room.displayName = 'Room';

Room.propTypes = {
    title : PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,
    imageUrl : PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    ratingType: PropTypes.oneOf(['self','star']).isRequired,

    price: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    qtyNights: PropTypes.string.isRequired,
    savings: PropTypes.string,
};

module.exports = Room;
