import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';
import RoomPrice from '../app/room-price.js';

describe('<Room />', function(){
    const Room = require('../app/room.js');
    const roomProps = {
        name: "Deluxe Balcony Room",
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


});
