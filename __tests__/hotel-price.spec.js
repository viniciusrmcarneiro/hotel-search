import React from 'react';
import { shallow } from 'enzyme';

describe('<HotelPrice />', function(){
    const HotelPrice = require('../app/hotel-price.js');
    const hotelProps = {
        currency: 'AUD',
        qtyNights: '1',
        price: '329',
    };

    it('should render', function(){
        const wrapper = shallow( <HotelPrice {...hotelProps} /> )
    });

});
