import React from 'react';
import PropTypes from 'prop-types';

const HotelAvatar = ({promotionDescription, avatarUrl,})  => (
    <div>
    </div>
);

HotelAvatar.displayName = 'HotelAvatar';

HotelAvatar.propTypes = {
    promotionDescription: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
}

module.exports = HotelAvatar;
