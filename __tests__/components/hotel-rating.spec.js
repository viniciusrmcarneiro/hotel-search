import React from 'react';
import { shallow,mount } from 'enzyme';
import { expect } from 'chai';

import StarRatingComponent from 'react-star-rating-component';
import RatingIconStar from '../../app/components/rating-icon-star';
import RatingIconCircle from '../../app/components/rating-icon-circle';

describe('<HotelHating />', function(){
    const HotelHating = require('../../app/components/hotel-rating.js');


    it('should renders the star icon', function(){
        const wrapper = shallow( <HotelHating rating_value="4" rating_type="star" /> )
        const {node} = wrapper.find( StarRatingComponent );

        const ratingWrapper = shallow( <div>{node.props.renderStarIcon(1, 1)}</div> );
        expect(ratingWrapper.find(RatingIconStar).exists()).to.be.true;
    });

    it('should render half rating', function(){
        const wrapper = shallow( <HotelHating rating_value="0.5" rating_type="star" /> )

        expect(wrapper.find({value: 0.5}).exists()).to.be.true;

        const {node} = wrapper.find( StarRatingComponent );

        const ratingWrapper = shallow( <div>{node.props.renderStarIcon(1, 0.5)}</div> );

        expect(ratingWrapper.find(RatingIconStar).exists()).to.be.true;
        expect(ratingWrapper.find(RatingIconStar).prop('color')).to.not.be.undefined;
        expect(ratingWrapper.find(RatingIconStar).prop('colorLeft')).to.not.be.undefined;
    });

    it('should render a integer rating', function(){
        const wrapper = shallow( <HotelHating rating_value="1" rating_type="star" /> )

        expect(wrapper.find({value: 1}).exists()).to.be.true;
        
        const {node} = wrapper.find( StarRatingComponent );

        const ratingWrapper = shallow( <div>{node.props.renderStarIcon(1, 1)}</div> );

        expect(ratingWrapper.find(RatingIconStar).exists()).to.be.true;
        expect(ratingWrapper.find(RatingIconStar).prop('color')).to.not.be.undefined;
        expect(ratingWrapper.find(RatingIconStar).prop('colorLeft')).to.be.undefined;
    });

    it('should renders the circle as a self rating icon', function(){
        const wrapper = shallow( <HotelHating rating_value="4" rating_type="self" /> )
        const {node} = wrapper.find( StarRatingComponent );

        const ratingWrapper = shallow( <div>{node.props.renderStarIcon(1, 1)}</div> );
        expect(ratingWrapper.find(RatingIconCircle).exists()).to.be.true;
    });

});
