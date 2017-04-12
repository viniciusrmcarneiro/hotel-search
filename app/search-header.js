import React from 'react';
import ReactDOM from 'react-dom';

const SearchHeader = ({cityName, hotelsCount, sortOptions, onSortChanged,})  => (
    <div>
        <span className="header-city-name">{cityName}</span>
        <span className="header-hotel-count">{hotelsCount}</span>
        <select
            id="sort-input"
            onChange={evt => onSortChanged(evt.target.value)}>
            {Object.keys(sortOptions).map( id => <option key={id} value={id}>{sortOptions[id]}</option>)}
        </select>
    </div>
);

module.exports = SearchHeader;
