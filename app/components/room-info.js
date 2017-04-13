import React from 'react';
import PropTypes from 'prop-types';

const RoomInfo = ({name, pointsEarned, freeCancellation,})  => (
    <div>
        <span>{name}</span>
        <span>{pointsEarned}</span>
        {freeCancellation && <span className="room-free-cancellation">Free cancellation</span>}
    </div>
);

RoomInfo.displayName = 'RoomInfo';

RoomInfo.propTypes = {
    name: PropTypes.string.isRequired,
    pointsEarned: PropTypes.string.isRequired,
    freeCancellation: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
};

module.exports = RoomInfo;
