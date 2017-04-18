import React from 'react';
import PropTypes from 'prop-types';
import HotelRating from './hotel-rating';
const HotelInfo = ({title, address, promotion, image, rating, rating_type})  => (
    <div>
        <span>{title}</span>
        <span>{address}</span>
        <img src={image} style={{height: 125, width: 145,}}/>
        <span>{promotion}</span>
        <HotelRating rating_value={rating} rating_type={rating_type}/>
    </div>
);

HotelInfo.displayName = 'HotelInfo';

HotelInfo.propTypes = {
    title : PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    promotion: PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    rating_type: PropTypes.oneOf(['self','star']).isRequired,
};

module.exports = HotelInfo;
