import React from 'react';
import sinon from 'sinon';

import { shallow } from 'enzyme';
import { SearchHeader } from 'app/components/search-header'

describe('<SearchHeader />', function(){
    let sandbox = sinon.sandbox.create();;
    let searchProps;


    beforeEach(() => {
        searchProps = {
            cityName: "Sydney",
            hotelsCount: 5,
            sortValue: "top-deals",
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

    it('should render with no data provided', function(){
        const wrapper = shallow( <SearchHeader /> )
    });

    it('should call onSearchFilter when a Sort is selected', function(){
        const wrapper = shallow( <SearchHeader {...searchProps} /> );
        const eventObj = { target: { value : 'name-asc'} };
        wrapper.find('#sort-input').simulate('change',  eventObj);
        sinon.assert.calledWith(searchProps.onSortChanged, eventObj.target.value);
    });

});
