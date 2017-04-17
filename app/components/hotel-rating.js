import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

import RatingIconCircle from './rating-icon-circle';
import RatingIconStar from './rating-icon-star';


const _unratedColor = "rgba(0,0,0,0.16)";
const _ratedColor   = "#f6e200";


// TODO: some refactoring to get ride of this method
const renderStarIcon = (Shape) => (nextValue, prevValue) => {

    if (prevValue >= nextValue){
        return <Shape color={_ratedColor}/>
    }

    if (prevValue + 0.5 === nextValue) {
        return <Shape color={_unratedColor} colorLeft={_ratedColor}/>
    }

    return <Shape color={_unratedColor}/>
}

const HotelRating = ({ratingValue, ratingType, ratingComponent})  => (
    <StarRatingComponent
        name="hotel-rating"
        value={parseInt(ratingValue)}
        starCount={5}
        editing={false}
        renderStarIcon={renderStarIcon(ratingType == "self" ? RatingIconCircle : RatingIconStar)}
    />
);

HotelRating.displayName = 'HotelRating';

HotelRating.propTypes = {
    ratingValue : PropTypes.any.isRequired,
    ratingType: PropTypes.oneOf(['self','star']).isRequired,
};

module.exports = HotelRating;
