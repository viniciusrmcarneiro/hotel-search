import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

describe('<HotelInfo />', function(){
    const HotelInfo = require('../../app/components/hotel-info.js');
    const hotelInfoProps = {
        "title": "Courtyard by Marriott Sydney-North Ryde",
        "address": "7-11 Talavera Rd, North Ryde",
        "imageUrl": "https://unsplash.it/145/125/?random",
        "rating": "4",
    };

    it('should render with self rating', function(){
        const props = Object.assign({"ratingType": "self"}, hotelInfoProps);
        const wrapper = shallow( <HotelInfo  {...props} /> );
        expect(wrapper.find('.rating-self').exists()).to.be.true;
    });

    it('should render with star rating', function(){
        const props = Object.assign({"ratingType": "star"}, hotelInfoProps);
        const wrapper = shallow( <HotelInfo  {...props} /> );
        expect(wrapper.find('.rating-star').exists()).to.be.true;
    });

});
