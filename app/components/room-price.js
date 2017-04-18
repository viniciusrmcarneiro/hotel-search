import React from 'react';
import PropTypes from 'prop-types';
import styles from './room-price.styl';
const RoomPrice = ({price, currency, qtyNights, savings,})  => (
    <div className={styles.container}>
        <div className={styles.price}>{price}</div>
        <div className={styles.currency}>{currency}</div>
        <div className={styles.qtyNights}>{qtyNights}</div>
        {savings && <div className={styles.savings}>{savings}</div>}
    </div>
);

RoomPrice.displayName = 'RoomPrice';

RoomPrice.propTypes = {
    price: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    qtyNights: PropTypes.string.isRequired,
    savings: PropTypes.string,
};

module.exports = RoomPrice;
