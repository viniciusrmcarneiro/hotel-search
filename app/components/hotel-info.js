import React, { PropTypes, } from 'react';
import HotelRating from './hotel-rating';

import styles from './components.styl';

const HotelInfo = ({title, address, promotion, image, rating, rating_type})  => (
    <div className="hotel-info-container">

        <div className="hotel-description-container">
            <span className="hotel-name">{title}</span>
            <div>
                <HotelRating rating_value={rating} rating_type={rating_type}/>
            </div>
        </div>
        <div className={styles.hotelAddress}>
            <span>{address}</span>
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
