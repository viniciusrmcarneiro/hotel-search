import { connect } from 'react-redux'
import React from 'react';
import PropTypes from 'prop-types';

import Hotel from './hotel';

export const HotelList = ({waiting, hotels,})  => {
    if (waiting === true){
        return <span className="waiting">Loading hotels...</span>
    }
    
    if (!hotels || hotels.length === 0){
        return <span className="empty-list">there is not hotel</span>
    }
    return <div>
        {hotels.map( props => <Hotel key={props.id} {...props}/>)}
    </div>
}

HotelList.displayName = 'HotelList';

HotelList.propTypes = {
    waiting : PropTypes.bool,
    hotels : PropTypes.array,
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

export default connect(mapStateToProps)(HotelList)
