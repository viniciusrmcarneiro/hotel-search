import React from 'react';
import PropTypes from 'prop-types';

import styles from './components.styl';

const HotelAvatar = ({promotion, image,})  => (
    <div className={styles.avatar}>
        <img src={image} style={{height: 125, width: 145,}}/>
        <span className={styles.promotion}>{promotion}</span>
    </div>

);

HotelAvatar.displayName = 'HotelAvatar';

HotelAvatar.propTypes = {
    image : PropTypes.string.isRequired,
    promotion: PropTypes.string.isRequired,
};

module.exports = HotelAvatar;
