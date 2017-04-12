import React from 'react';
import sinon from 'sinon';

import { shallow } from 'enzyme';

import {expect} from 'chai';

describe('<SearchHeader />', function(){
    const SearchHeader = require('../app/search-header.js');
    let sandbox = sinon.sandbox.create();;
    let searchProps;


    beforeEach(() => {
        searchProps = {
            cityName: "Sydney",
            hotelsCount: 5,
            sortOptions: {
                "top-deals": "Top Deals",
                "price-desc": "Price (high-low)",
                "price-asc": "Price (low-high)",
                "name-asc": "Name (A-Z)"
            },
            onSortChanged: sandbox.stub(),
        };
    });

    afterEach(() => {
        sandbox.restore();
    });


    it('should render', function(){
        const wrapper = shallow( <SearchHeader {...searchProps} /> )
    });

    it('should call onSearchFilter when a Filter is selected', function(){
        const wrapper = shallow( <SearchHeader {...searchProps} /> );
        const eventObj = { target: { value : 'name-asc'} };
        wrapper.find('#sort-input').simulate('change',  eventObj);
        sinon.assert.calledWith(searchProps.onSortChanged, eventObj.target.value);
    });

});
