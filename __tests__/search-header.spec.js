import React from 'react';


import { shallow } from 'enzyme';

describe('SEARCH HEADER', function(){
    const SearchHeader = require('../app/search-header.js');
    const searchProps = { cityName: "Sydney", hotelsCount: 5, };

    it('renders the <SearchHeader />', function(){
        const wrapper = shallow( <SearchHeader {...searchProps} /> )
    });

});
