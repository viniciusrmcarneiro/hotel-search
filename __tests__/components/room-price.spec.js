import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<RoomPrice />', function(){
    const RoomPrice = require('../../app/components/room-price.js');
    const hotelProps = {
        currency: 'AUD',
        qtyNights: '1',
        price: 329,
        savings: 0,
    };

    it('should not render savings ', function(){
        const wrapper = shallow( <RoomPrice {...hotelProps} /> )
        expect(wrapper.find('.room-savings').exists()).to.be.false;
    });

    it('should render savings', function(){
        const wrapper = shallow( <RoomPrice {...{...hotelProps, savings: 20,}} /> )
        expect(wrapper.find('.room-savings').exists()).to.be.true;
    });

});
