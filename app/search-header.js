import React from 'react';

import PropTypes from 'prop-types';

const SearchHeader = ({cityName, hotelsCount, sortValue, sortOptions, onSortChanged,})  => (
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
);

SearchHeader.displayName = 'SearchHeader';

SearchHeader.propTypes = {
    cityName: PropTypes.string.isRequired,
    hotelsCount: PropTypes.string.isRequired,
    sortValue: PropTypes.string.isRequired,
    sortOptions: PropTypes.shape({
        "top-deals": PropTypes.string.isRequired,
        "price-desc": PropTypes.string.isRequired,
        "price-asc": PropTypes.string.isRequired,
        "name-asc": PropTypes.string.isRequired,
    }),
    onSortChanged: PropTypes.func.isRequired,
};

module.exports = SearchHeader;
