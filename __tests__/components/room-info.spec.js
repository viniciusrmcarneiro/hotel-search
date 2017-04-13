import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

describe('<RoomInfo />', function(){
    const RoomInfo = require('../../app/components/room-info.js');
    const roomInfoProps = {
        name: "Deluxe Balcony Room",
        pointsEarned: "0",
    };

    it('should render', function(){
        const wrapper = shallow( <RoomInfo {...roomInfoProps} /> )
    });

    it('should render freeCancellation', function(){
        const wrapper = shallow( <RoomInfo {...Object.assign({freeCancellation: 'true'}, roomInfoProps)} /> )
        expect(wrapper.find('.room-free-cancellation').exists()).to.be.true;
    });

});
