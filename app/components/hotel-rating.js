import React, { PropTypes, } from 'react';
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

const HotelRating = ({rating_value, rating_type, ratingComponent})  => (
    <StarRatingComponent
        name="hotel-rating"
        value={parseFloat(rating_value)}
        starCount={5}
        editing={false}
        renderStarIcon={renderStarIcon(rating_type == "self" ? RatingIconCircle : RatingIconStar)}
    />
);

HotelRating.displayName = 'HotelRating';

HotelRating.propTypes = {
    rating_value : PropTypes.any.isRequired,
    rating_type: PropTypes.oneOf(['self','star']).isRequired,
};

module.exports = HotelRating;
