import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';
import HotelRating from 'app/components/hotel-rating';


describe('<HotelInfo />', function(){
    const HotelInfo = require('../../app/components/hotel-info.js');
    const hotelInfoProps = {
        "title": "Courtyard by Marriott Sydney-North Ryde",
        "address": "7-11 Talavera Rd, North Ryde",
        "image": "https://unsplash.it/145/125/?random",
        "rating": "4",
        "rating_type": "self",
        "promotion": "Deal",
    };

    it('should render', function(){
        const wrapper = shallow( <HotelInfo  {...hotelInfoProps} /> );
    });

    it('should render HotelRating', function(){
        const wrapper = shallow( <HotelInfo  {...hotelInfoProps} /> );
        expect(wrapper.find(HotelRating).exists()).to.be.true;

    });

});
