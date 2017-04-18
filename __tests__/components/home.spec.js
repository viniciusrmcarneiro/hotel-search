import React from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';

import Home from 'app/components/home';
import Store from 'app/store';


describe('<Home />', function(){

    it('should render', function(){
        const hotelSearch = { };
        const store = Store({hotelSearch});

        const wrapper = shallow( <Home store={store}/> );
    });

});
