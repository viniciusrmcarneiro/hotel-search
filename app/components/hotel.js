import React from 'react';
import PropTypes from 'prop-types';

import HotelInfo from './hotel-info';
import Room from './room';

const Hotel = ({
    image, promotion, title, address, rating, rating_type,
    room,
})  => (
    <div>
        <HotelInfo {...{image, promotion, title, address, image, rating, rating_type}} />
        <Room {...room} />
    </div>
);

Hotel.displayName = 'Hotel';

Hotel.propTypes = {
    image : PropTypes.string.isRequired,
    promotion : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,    
    rating : PropTypes.string.isRequired,
    rating_type: PropTypes.oneOf(['self','star']).isRequired,

    room: PropTypes.object.isRequired,
};

module.exports = Hotel;
