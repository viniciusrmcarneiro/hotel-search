import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';
import RoomPrice from '../app/room-price.js';
import RoomInfo from '../app/room-info.js';

describe('<Room />', function(){
    const Room = require('../app/room.js');
    const roomProps = {
        title: "Deluxe Balcony Room",
        pointsEarned: "0",
        currency: 'AUD',
        qtyNights: '1',
        price: '$329',
        savings: '$20~',
    };

    it('should render', function(){
        const wrapper = shallow( <Room {...roomProps} /> )
    });

    it("should render room's price", function(){
        const wrapper = shallow( <Room {...roomProps} /> )
        expect(wrapper.find(RoomPrice).exists()).to.be.true;
    });

    it("should render room's info", function(){
        const wrapper = shallow( <Room {...roomProps} /> )
        expect(wrapper.find(RoomInfo).exists()).to.be.true;
    });


});
