import React from 'react';
import PropTypes from 'prop-types';
import HotelRating from './hotel-rating';
const HotelInfo = ({title, address, imageUrl, rating, ratingType})  => (
    <div>
        <span>{title}</span>
        <span>{address}</span>
        <img src={imageUrl} style={{height: 125, width: 145,}}/>
        <HotelRating ratingValue={rating} ratingType={ratingType}/>
    </div>
);

HotelInfo.displayName = 'HotelInfo';

HotelInfo.propTypes = {
    title : PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,
    imageUrl : PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    ratingType: PropTypes.oneOf(['self','star']).isRequired,
};

module.exports = HotelInfo;
