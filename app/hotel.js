import React from 'react';
import PropTypes from 'prop-types';

import HotelInfo from './hotel-info';
import Room from './room';

const Hotel = ({title, address, imageUrl, rating, ratingType, room})  => (
    <div>
        <HotelInfo {...{title, address, imageUrl, rating, ratingType}} />
        <Room {...room} />
    </div>
);

Hotel.displayName = 'Hotel';

Hotel.propTypes = {
    title : PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,
    imageUrl : PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    ratingType: PropTypes.oneOf(['self','star']).isRequired,
    room: PropTypes.object.isRequired,
};

module.exports = Hotel;
