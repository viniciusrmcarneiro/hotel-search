import React from 'react';
import { shallow } from 'enzyme';

describe('<RoomInfo />', function(){
    const RoomInfo = require('../app/room-info.js');
    const roomInfoProps = {
        name: "Deluxe Balcony Room",
        points_earned: "0",
    };

    it('should render', function(){
        const wrapper = shallow( <RoomInfo {...roomInfoProps} /> )
    });



});
