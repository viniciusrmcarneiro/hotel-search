import React from 'react';
import PropTypes from 'prop-types';

const RoomInfo = ({name, points_earned, free_cancellation,})  => (
    <div>
        <div>{name}</div>
        <div>{points_earned}</div>
        {free_cancellation && <div className="room-free-cancellation">Free cancellation</div>}
    </div>
);

RoomInfo.displayName = 'RoomInfo';

RoomInfo.propTypes = {
    name: PropTypes.string.isRequired,
    points_earned: PropTypes.string.isRequired,
    free_cancellation: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
};

module.exports = RoomInfo;
