import { connect } from 'react-redux'

import React from 'react';

import PropTypes from 'prop-types';

export const SearchHeader = ({cityName, hotelsCount, sortValue, sortOptions, onSortChanged,})  => {
    if (!cityName || !sortValue || !sortOptions || !onSortChanged){
        return null;
    }

    return (
        <div>
            <span className="header-city-name">{cityName}</span>
            <span className="header-hotel-count">{hotelsCount}</span>
            <select
                id="sort-input"
                value={sortValue}
                onChange={evt => onSortChanged(evt.target.value)}>
                {Object.keys(sortOptions).map( id => <option key={id} value={id}>{sortOptions[id]}</option>)}
            </select>
        </div>
    )
};

SearchHeader.displayName = 'SearchHeader';

SearchHeader.propTypes = {
    cityName: PropTypes.string,
    hotelsCount: PropTypes.string,
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

    if (state.hotelSearch.waiting){
        return {
            waiting: state.hotelSearch.waiting,
        };
    }

    if (!state.hotelSearch.hotelsIds){
        return {};
    }

    return {
        hotels: state.hotelSearch.hotelsIds.map(id => state.hotelSearch.hotelsById[id])
    };
};

export default connect(mapStateToProps)(SearchHeader)
