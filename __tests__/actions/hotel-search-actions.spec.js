"use strict";

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {expect} from 'chai';

import {
    hotelSearch,
    sortByPrice,
} from 'app/actions/hotel-search-actions';

import api from 'app/actions/api-actions';

import {
    HOTEL_SEARCH_REQUEST,
    HOTEL_SEARCH_SUCCESS,
    HOTEL_SEARCH_SORT_BY_PRICE,
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

    it('should sort by price', function(){
        const expectedActions = [
            {
                type: HOTEL_SEARCH_SORT_BY_PRICE,
                hotelsIds: mockData.hotelIdsByPrice,
            },
        ];

        const store = mockStore({
            hotelSearch: mockData.hotelSearchStore,
        });

        store.dispatch(sortByPrice());

        expect(store.getActions()).to.be.deep.equals(expectedActions);

    });

});
