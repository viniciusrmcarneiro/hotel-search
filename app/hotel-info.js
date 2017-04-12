import React from 'react';
import PropTypes from 'prop-types';

const HotelInfo = ({title, address, imageUrl, rating, ratingType})  => (
    <div>
        <span>{title}</span>
        <span>{address}</span>
        <img src={imageUrl}/>
        {ratingType == 'self' && <span className="rating-self">{rating}</span>}
        {ratingType == 'star' && <span className="rating-star">{rating}</span>}
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
