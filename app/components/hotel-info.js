import React from 'react';
import PropTypes from 'prop-types';
import HotelRating from './hotel-rating';
import styles from './hotel.styl';

const HotelInfo = ({title, address, promotion, image, rating, rating_type})  => (
    <div className={styles.container}>

        <div className={styles.descriptionContainer}>
            <span className={styles.hotelName}>{title}</span>
            <div>
                <HotelRating rating_value={rating} rating_type={rating_type}/>
            </div>
            <div className={styles.hotelAddress}>
                <span>{address}</span>
            </div>
        </div>
    </div>
);

HotelInfo.displayName = 'HotelInfo';

HotelInfo.propTypes = {
    title : PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    promotion: PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    rating_type: PropTypes.oneOf(['self','star']).isRequired,
};

module.exports = HotelInfo;
