import React from 'react';
import PropTypes from 'prop-types';

import HotelAvatar from './hotel-avatar';
import HotelInfo from './hotel-info';
import Room from './room';

const Hotel = ({
    imageUrl, promotion,
    title, address, rating, rating_type,
    room,
})  => (
    <div>
        <HotelAvatar {...{ avatarUrl: imageUrl, promotion}} />
        <HotelInfo {...{title, address, imageUrl, rating, rating_type}} />
        <Room {...room} />
    </div>
);

Hotel.displayName = 'Hotel';

Hotel.propTypes = {
    imageUrl : PropTypes.string.isRequired,
    promotion : PropTypes.string.isRequired,

    title : PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,    
    rating : PropTypes.string.isRequired,
    rating_type: PropTypes.oneOf(['self','star']).isRequired,

    room: PropTypes.object.isRequired,
};

module.exports = Hotel;