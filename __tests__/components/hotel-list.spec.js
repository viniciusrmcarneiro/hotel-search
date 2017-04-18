import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

import { HotelList } from '../../app/components/hotel-list';
import Hotel from '../../app/components/hotel';

import mockData from '../mock-data';

describe('<HotelList />', function(){

    it('should render with a waiting message', function(){
        const wrapper = shallow( <HotelList waiting={true} /> );
        expect(wrapper.find('.waiting').exists()).to.be.true;
    });

    it('should render an empty list', function(){
        const wrapper = shallow( <HotelList hotels={[]} /> );
        expect(wrapper.find('.empty-list').exists()).to.be.true;
    });

    it('should render with the list of hotel', function(){
        const hotels = mockData.hotelSearchStore.hotelsIds.map( id => mockData.hotelSearchStore.hotelsById[id] );
        const wrapper = shallow( <HotelList hotels={hotels} /> );
        expect(wrapper.find(Hotel)).to.have.length(hotels.length);
    });

});
