import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

import HotelAvatar from '../../app/components/hotel-avatar';
import HotelInfo from '../../app/components/hotel-info';
import Room from '../../app/components/room';

describe('<Hotel />', function(){
    const Hotel = require('../../app/components/hotel.js');
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
            "freeCancellation": "true",
            "qtyNights": "1",
        },
    };

    it("should render hotel's avatar", function(){
        const wrapper = shallow( <Hotel {...hotelProps} /> );
        expect(wrapper.find(HotelAvatar).exists()).to.be.true;
    });

    it('should render hotel info', function(){
        const wrapper = shallow( <Hotel {...hotelProps} /> );
        expect(wrapper.find(HotelInfo).exists()).to.be.true;
    });

    it('should render room', function(){
        const wrapper = shallow( <Hotel {...hotelProps} /> );
        expect(wrapper.find(Room).exists()).to.be.true;
    });

});
