import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

import HotelInfo from '../../app/components/hotel-info';
import Room from '../../app/components/room';

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
            "price": "$329",
            "currency": "AUD",
            "savings": "$30~",
            "points_earned": "0",
            "free_cancellation": "true",
            "qtyNights": "1",
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
