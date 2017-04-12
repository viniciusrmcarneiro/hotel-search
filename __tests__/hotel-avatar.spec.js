import React from 'react';
import { shallow } from 'enzyme';

describe('<HotelAvatar />', function(){
    const HotelAvatar = require('../app/hotel-avatar.js');
    const avatarProps = {
        promotionDescription: "Exclusive Deal",
        avatarUrl: "https://unsplash.it/145/125/?random",
    };


    it('should render', function(){
        const wrapper = shallow( <HotelAvatar {...avatarProps} /> )
    });

});
