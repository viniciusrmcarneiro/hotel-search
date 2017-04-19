import React from 'react';
import PropTypes from 'prop-types';

import HotelAvatar from './hotel-avatar';
import HotelInfo from './hotel-info';

import RoomInfo from './room-info';
import RoomPrice from './room-price';

import styles from './components.styl';

const Hotel = ({
    image, promotion, title, address, rating, rating_type,
    room,
})  => (
    <div className="hotel-container">

        <HotelAvatar {...{image, promotion}}/>

        <div className="hotel-container-2">
            <div className="line"/>
            <HotelInfo {...{image, promotion, title, address, image, rating, rating_type}} />
            
            <RoomInfo {...room} />
            <RoomPrice {...room} />
        </div>

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
