import React from 'react';
import PropTypes from 'prop-types';

import HotelInfo from './hotel-info';

const Hotel = ({title, address, imageUrl, rating, ratingType})  => (
    <div>
        <HotelInfo {...{title, address, imageUrl, rating, ratingType}} />
    </div>
);

Hotel.displayName = 'Hotel';

Hotel.propTypes = {
    title : PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,
    imageUrl : PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    ratingType: PropTypes.oneOf(['self','star']).isRequired,
};

module.exports = Hotel;
