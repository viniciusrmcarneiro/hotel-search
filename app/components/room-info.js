import React from 'react';
import PropTypes from 'prop-types';

import styles from './components.styl';

const RoomInfo = ({name, points_earned, free_cancellation,})  => (
    <div className={styles.roomInfoContainer}>
        <div className={styles.roomName}>{name}</div>
        
        {points_earned && points_earned != '0' &&
            <div className="room-points-earned">
                <div>Qantas Points earned*</div>
                <div>{points_earned}</div>
            </div>
            
        }

        {free_cancellation == "true" && 
            <div className="room-free-cancellation">Free cancellation</div>
        }
    </div>
);

RoomInfo.displayName = 'RoomInfo';

RoomInfo.propTypes = {
    name: PropTypes.string.isRequired,
    points_earned: PropTypes.string.isRequired,
    free_cancellation: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
};

module.exports = RoomInfo;
