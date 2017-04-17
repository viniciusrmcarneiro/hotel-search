"use strict";

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {expect} from 'chai';

import {
    hotelSearch,
} from 'app/actions/hotel-search-actions';

import api from 'app/actions/api-actions';

import {
    HOTEL_SEARCH_REQUEST,
    HOTEL_SEARCH_SUCCESS,
} from 'app/actions/action-types';

import mockData from '../mock-data'

const sinon = require('sinon');


describe('HOTEL SEARCH ACTIONS', function(){
    let sandbox;
    let middlewares = [ thunk ];
    let mockStore = configureMockStore(middlewares);

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('request', function(){
        sandbox.stub(api, 'get', () => Promise.resolve(mockData.hotelSearch));

        const expectedActions = [
            {
                type: HOTEL_SEARCH_REQUEST,
            },
            {
                type: HOTEL_SEARCH_SUCCESS,
                ...mockData.hotelSearchStore,
            },
        ];

        const store = mockStore({});

        return store.dispatch(hotelSearch({
            city: 'Sydney',
        }))
        .then(() =>{
            expect(store.getActions()).to.be.deep.equals(expectedActions);
        })
    });


});
