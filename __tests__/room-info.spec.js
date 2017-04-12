import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

describe('<RoomInfo />', function(){
    const RoomInfo = require('../app/room-info.js');
    const roomInfoProps = {
        name: "Deluxe Balcony Room",
        points_earned: "0",
    };

    it('should render', function(){
        const wrapper = shallow( <RoomInfo {...roomInfoProps} /> )
    });

    it('should render free_cancellation', function(){
        const wrapper = shallow( <RoomInfo {...Object.assign({free_cancellation: 'true'}, roomInfoProps)} /> )
        expect(wrapper.find('.room-free-cancellation').exists()).to.be.true;
    });

});
