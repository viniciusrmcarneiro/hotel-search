import React from 'react';
import PropTypes from 'prop-types';

const RoomInfo = ({name, points_earned, free_cancellation,})  => (
    <div>
        <span>{name}</span>
        <span>{points_earned}</span>
        {free_cancellation && <span className="room-free-cancellation">Free cancellation</span>}
    </div>
);

RoomInfo.displayName = 'RoomInfo';

RoomInfo.propTypes = {
    name: PropTypes.string.isRequired,
    points_earned: PropTypes.string.isRequired,
    free_cancellation: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
};

module.exports = RoomInfo;
