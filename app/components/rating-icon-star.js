import React, { PropTypes, } from 'react';

const RatingIconStar = (props) =>  (
    <svg viewBox="0 0 32 32" style={{width:"1em", height:"1em", verticalAlign: "middle"}} >
        <path fill={props.color} d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118 l11.547-1.2L16.026,0.6L20.388,10.918z"/>
        {props.colorLeft && <polygon fill={props.colorLeft} points="11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16,0.66  "/>}
    </svg>
);

RatingIconStar.displayName = "RatingIconStar"

RatingIconStar.propTypes = {
    color: PropTypes.string.isRequired,
    colorLeft : PropTypes.string,
};

module.exports = RatingIconStar;
