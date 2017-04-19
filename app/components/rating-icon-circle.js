import React from 'react';
import PropTypes from 'prop-types';

const RatingIconCircle = (props) => (
    <svg viewBox="0 0 12 12" style={{width:"0.8em", height:"0.8em", transform: "rotate(90deg)", verticalAlign: "middle"}}>
        <defs>
            <clipPath id="top">
            <path d="M 0 0 h 12 v 6 h -12 z" />
            </clipPath>

            <clipPath id="bottom">
            <path d="M 0 6 h 12 v 6 h -12 z" />
            </clipPath>

            <circle id="circle-left" cx="6" cy="6" r="6" clipPath="url(#bottom)" />
            <circle id="circle-right" cx="6" cy="6" r="6" clipPath="url(#top)" />
        </defs>

        <use xlinkHref="#circle-left" fill={props.colorLeft || props.color} />
        <use xlinkHref="#circle-right" fill={props.color} />
    </svg>
);

RatingIconCircle.displayName = "RatingIconCircle";

RatingIconCircle.propTypes = {
    color: PropTypes.string.isRequired,
    colorLeft : PropTypes.string,
};

module.exports = RatingIconCircle;
