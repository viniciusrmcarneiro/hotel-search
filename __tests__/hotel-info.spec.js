import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

describe('<HotelInfo />', function(){
    const HotelInfo = require('../app/hotel-info.js');
    const hotelInfoProps = {
        "title": "Courtyard by Marriott Sydney-North Ryde",
        "address": "7-11 Talavera Rd, North Ryde",
        "image": "https://unsplash.it/145/125/?random",
        "rating": "4",
    };

    it('should render with self rating', function(){
        const props = Object.assign({"rating_type": "self"}, hotelInfoProps);
        const wrapper = shallow( <HotelInfo  {...props} /> );
    });

});
