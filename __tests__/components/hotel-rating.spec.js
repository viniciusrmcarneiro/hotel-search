import React from 'react';
import { shallow,mount } from 'enzyme';
import { expect } from 'chai';
import StarRatingComponent from 'react-star-rating-component';

describe('<HotelHating />', function(){
    const HotelHating = require('../../app/components/hotel-rating.js');


    it('should renders the star icon', function(){
        const wrapper = shallow( <HotelHating ratingValue="4" /> )
        const {node} = wrapper.find( StarRatingComponent );

        const ratingWrapper = shallow( <div>{node.props.renderStarIcon(1, 1)}</div> );
        expect(ratingWrapper.find('Star').exists()).to.be.true;
    });


});
