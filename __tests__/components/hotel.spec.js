import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

import HotelAvatar from 'app/components/hotel-avatar';
import HotelInfo from 'app/components/hotel-info';

import RoomInfo from 'app/components/room-info';
import RoomPrice from 'app/components/room-price';

describe('<Hotel />', function(){
    const Hotel = require('../../app/components/hotel.js');
    const hotelProps = {
        "id": "cxd650nuyo",
        "title": "Courtyard by Marriott Sydney-North Ryde",
        "address": "7-11 Talavera Rd, North Ryde",
        "image": "https://unsplash.it/145/125/?random",
        "rating": "4",
        "rating_type": "self",
        "promotion": "Exclusive Deal",
        "room": {
            "name": "Deluxe Balcony Room",
            "price": 329,
            "currency": "AUD",
            "savings": 30,
            "points_earned": "0",
            "free_cancellation": "true",
            "qtyNights": "1",
        },
    };

    it('should render HotelAvatar', function(){
        const wrapper = shallow( <Hotel {...hotelProps} /> );
        expect(wrapper.find(HotelAvatar).exists()).to.be.true;
    });

    it('should render HotelInfo', function(){
        const wrapper = shallow( <Hotel {...hotelProps} /> );
        expect(wrapper.find(HotelInfo).exists()).to.be.true;
    });

    it('should render RoomInfo', function(){
        const wrapper = shallow( <Hotel {...hotelProps} /> );
        expect(wrapper.find(RoomInfo).exists()).to.be.true;
    });

    it('should render RoomPrice', function(){
        const wrapper = shallow( <Hotel {...hotelProps} /> );
        expect(wrapper.find(RoomPrice).exists()).to.be.true;
    });

});
