import React from 'react';
import ReactDOM from 'react-dom';

const SearchHeader = ({cityName, hotelsCount,})  => (
    <div>
        <span className="header-city-name">{cityName}</span>
        <span className="header-hotel-count">{hotelsCount}</span>
    </div>
);

module.exports = SearchHeader;
