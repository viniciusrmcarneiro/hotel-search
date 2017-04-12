import React from 'react';
import PropTypes from 'prop-types';


const Room = ({title, address, imageUrl, rating, ratingType})  => (
    <div>
    </div>
);

Room.displayName = 'Room';

Room.propTypes = {
    title : PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,
    imageUrl : PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    ratingType: PropTypes.oneOf(['self','star']).isRequired,
};

module.exports = Room;
