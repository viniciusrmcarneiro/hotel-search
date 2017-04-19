import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

describe('<RoomInfo />', function(){
    const RoomInfo = require('../../app/components/room-info.js');
    const roomInfoProps = {
        name: "Deluxe Balcony Room",
        points_earned: "0",
        raring_type: "self",
    };

    it('should render', function(){
        const wrapper = shallow( <RoomInfo {...roomInfoProps} /> )
    });

    it('should render not points_earned', function(){
        const wrapper = shallow( <RoomInfo {...Object.assign({}, roomInfoProps, {free_cancellation: 'true'})} /> )
        expect(wrapper.find('.room-points-earned').exists()).to.be.false;
    });

    it('should render points_earned', function(){
        const wrapper = shallow( <RoomInfo {...Object.assign({}, roomInfoProps, {points_earned: '20'})} /> )
        expect(wrapper.find('.room-points-earned').exists()).to.be.true;
    });

    it('should render free_cancellation', function(){
        const wrapper = shallow( <RoomInfo {...Object.assign({}, roomInfoProps, {free_cancellation: 'true'})} /> )
        expect(wrapper.find('.room-free-cancellation').exists()).to.be.true;
    });

    it('should render not free_cancellation', function(){
        const wrapper = shallow( <RoomInfo {...Object.assign({}, roomInfoProps, {free_cancellation: 'false'})} /> )
        expect(wrapper.find('.room-free-cancellation').exists()).to.be.false;
    });

});
