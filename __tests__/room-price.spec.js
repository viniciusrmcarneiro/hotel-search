import React from 'react';
import { shallow } from 'enzyme';

describe('<RoomPrice />', function(){
    const RoomPrice = require('../app/room-price.js');
    const hotelProps = {
        currency: 'AUD',
        qtyNights: '1',
        price: '$329',
        savings: '$20~',
    };

    it('should render', function(){
        const wrapper = shallow( <RoomPrice {...hotelProps} /> )
    });

});
