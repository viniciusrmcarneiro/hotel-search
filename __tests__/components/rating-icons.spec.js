import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import RatingIconStar from '../../app/components/rating-icon-star';
import RatingIconCircle from '../../app/components/rating-icon-circle';

describe('<RatingIconStar />', function(){


    it('should renders with one color', function(){
        const wrapper = shallow( <RatingIconStar color="blue" /> )
    });

    it('should renders with two colors', function(){
        const wrapper = shallow( <RatingIconStar color="blue" leftColor="green" /> )
    });


});

describe('<RatingIconCircle />', function(){


    it('should renders with one color', function(){
        const wrapper = shallow( <RatingIconCircle color="blue" /> )
    });

    it('should renders with two colors', function(){
        const wrapper = shallow( <RatingIconCircle color="blue" leftColor="green" /> )
    });


});
