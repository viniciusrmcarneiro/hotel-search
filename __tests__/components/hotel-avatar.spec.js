import React from 'react';
import { shallow } from 'enzyme';

describe('<HotelAvatar />', function(){
    const HotelAvatar = require('../../app/components/hotel-avatar.js');
    const avatarProps = {
        promotion: "Exclusive Deal",
        avatarUrl: "https://unsplash.it/145/125/?random",
    };


    it('should render', function(){
        const wrapper = shallow( <HotelAvatar {...avatarProps} /> )
    });

});
