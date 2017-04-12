import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

import HotelInfo from '../app/hotel-info';
import Room from '../app/room';

describe('<Hotel />', function(){
    const Hotel = require('../app/hotel.js');
    const hotelProps = {
        "id": "cxd650nuyo",
        "title": "Courtyard by Marriott Sydney-North Ryde",
        "address": "7-11 Talavera Rd, North Ryde",
        "imageUrl": "https://unsplash.it/145/125/?random",
        "rating": "4",
        "ratingType": "self",
        "promotion": "Exclusive Deal",
        "room": {
            "name": "Deluxe Balcony Room",
            "price": "$329",
            "currency": "AUD",
            "savings": "$30~",
            "pointsEarned": "0",
            "freeCancellation": "true"
        },
    };

    it('should render hotel info', function(){
        const wrapper = shallow( <Hotel {...hotelProps} /> );
        expect(wrapper.find(HotelInfo).exists()).to.be.true;
    });

    it('should render room', function(){
        const wrapper = shallow( <Hotel {...hotelProps} /> );
        expect(wrapper.find(Room).exists()).to.be.true;
    });

});
