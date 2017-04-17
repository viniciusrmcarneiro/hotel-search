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
        "ratingType": "self",
    };

    it('should render', function(){
        const wrapper = shallow( <HotelInfo  {...hotelInfoProps} /> );
    });

    it('should render an image 145px wide ', function(){
        const wrapper = shallow( <HotelInfo  {...hotelInfoProps} /> );
        expect(wrapper.find('img').prop('style')).to.have.property('width').to.be.equals(145);
    });

    it('should render an image 125px high ', function(){
        const wrapper = shallow( <HotelInfo  {...hotelInfoProps} /> );
        expect(wrapper.find('img').prop('style')).to.have.property('height').to.be.equals(125);
    });
});
