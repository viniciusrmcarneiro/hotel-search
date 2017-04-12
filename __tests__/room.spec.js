import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

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


});
