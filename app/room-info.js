import React from 'react';
import PropTypes from 'prop-types';

const RoomInfo = ({name, points_earned, })  => (
    <div>
        <span>{name}</span>
        <span>{points_earned}</span>
    </div>
);

RoomInfo.displayName = 'RoomInfo';

RoomInfo.propTypes = {
    name: PropTypes.string.isRequired,
    points_earned: PropTypes.string.isRequired,
};

module.exports = RoomInfo;
