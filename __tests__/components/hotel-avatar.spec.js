import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

import HotelAvatar from 'app/components/hotel-avatar';

describe('<Avatar />', function(){
    const props = {
        image: 'https://www.com.au',
        promotion: 'Exclusive Deal',
    };

    it('should render', function(){
        const wrapper = shallow( <HotelAvatar {...props} /> )
    });

    it('should render an image 145px wide ', function(){
        const wrapper = shallow( <HotelAvatar {...props} /> );
        expect(wrapper.find('img').prop('style')).to.have.property('width').to.be.equals(145);
    });

    it('should render an image 125px high ', function(){
        const wrapper = shallow( <HotelAvatar {...props} /> );
        expect(wrapper.find('img').prop('style')).to.have.property('height').to.be.equals(125);
    });

});
