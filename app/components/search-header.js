import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


import { sortBy } from 'app/actions/hotel-search-actions';

import styles from './search-header.styl';

export const SearchHeader = ({cityName, hotelsCount, sortValue, sortOptions, onSortChanged,})  => {
    if (!cityName || !sortValue || !sortOptions || !onSortChanged){
        return null;
    }

    return (
        <div className={styles.container}>
            <p className={styles.textContainer}>
                <span className={styles.headerHotelCount}>{hotelsCount}</span> hotels in <span className={styles.headerCityName}>{cityName}.</span>
            </p>
            <div className={styles.sortContainer}>
                <label className={styles.fieldLabel}>Sort by </label>
                <select
                    className={styles.sortInput}
                    id="sort-input"
                    value={sortValue}
                    onChange={evt => onSortChanged(evt.target.value)}>
                    {Object.keys(sortOptions).map( id => <option key={id} value={id}>{sortOptions[id]}</option>)}
                </select>
            </div>
        </div>
    )
};

SearchHeader.displayName = 'SearchHeader';

SearchHeader.propTypes = {
    cityName: PropTypes.string,
    hotelsCount: PropTypes.number,
    sortValue: PropTypes.string,
    sortOptions: PropTypes.shape({
        "top-deals": PropTypes.string.isRequired,
        "price-desc": PropTypes.string.isRequired,
        "price-asc": PropTypes.string.isRequired,
        "name-asc": PropTypes.string.isRequired,
    }),
    onSortChanged: PropTypes.func,
};



const mapStateToProps = state => {

    if (!state.hotelSearch){
        return {};
    }

    return Object.assign({},
        state.hotelSearch.sort_filters ? { sortOptions: state.hotelSearch.sort_filters}      : null,
        state.hotelSearch.sortedField  ? { sortValue: state.hotelSearch.sortedField}         : null,
        state.hotelSearch.query        ? { cityName: state.hotelSearch.query.location }      : null,
        state.hotelSearch.hotelsIds    ? { hotelsCount: state.hotelSearch.hotelsIds.length } : null,
    );

};

const actions = (dispatch) => bindActionCreators({onSortChanged: sortBy},dispatch)

export default connect(mapStateToProps, actions)(SearchHeader)
