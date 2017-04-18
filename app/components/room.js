import React from 'react';
import PropTypes from 'prop-types';

import RoomInfo from './room-info';
import RoomPrice from './room-price';

const Room = ({
    name, points_earned, freeCancellation,
    price, currency, qtyNights, savings,
})  => (
    <div>
        <RoomInfo {...{name, points_earned, freeCancellation}}/>
        <RoomPrice {...{price, currency, qtyNights, savings,}}/>
    </div>
);

Room.displayName = 'Room';

Room.propTypes = {
    name : PropTypes.any.isRequired,
    points_earned : PropTypes.any.isRequired,
    freeCancellation : PropTypes.any,

    price: PropTypes.any.isRequired,
    currency: PropTypes.any.isRequired,
    qtyNights: PropTypes.any.isRequired,
    savings: PropTypes.any,
};

module.exports = Room;
