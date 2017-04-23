import React, { PropTypes, } from 'react';

import styles from './components.styl';

const RoomInfo = ({name, points_earned, free_cancellation,})  => (
    <div className="room-info-container">
        <div className="room-name">{name}</div>
        
        {points_earned && points_earned != '0' &&
            <div className="room-points-earned">
                <div>Qantas Points earned*</div>
                <div>{points_earned}</div>
            </div>
            
        }

        {free_cancellation == "true" && 
            <div className="room-free-cancellation"><div className="icon"><span className="check-mark">L</span></div><span>Free cancellation</span></div>
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
