import React from 'react';
import PropTypes from 'prop-types';

const HotelInfo = ({title, address, imageUrl, rating, ratingType})  => (
    <div>
        <span>{title}</span>
        <span>{address}</span>
        <img src={imageUrl}/>
        <span>{ratingType}={rating}</span>
    </div>
);

HotelInfo.displayName = 'HotelInfo';

HotelInfo.propTypes = {
    title : PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,
    imageUrl : PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    ratingType: PropTypes.oneOf(['self']).isRequired,
};

module.exports = HotelInfo;
