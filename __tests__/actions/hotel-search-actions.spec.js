"use strict";

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import chai,{ expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

import {
    hotelSearch,
    sortBy,
} from 'app/actions/hotel-search-actions';

import api from 'app/actions/api-actions';

import {
    HOTEL_SEARCH_REQUEST,
    HOTEL_SEARCH_SUCCESS,
    HOTEL_SEARCH_SORT_BY_PRICE,
} from 'app/actions/action-types';

import mockData from '../mock-data'

const sinon = require('sinon');
chai.should();
chai.use(chaiAsPromised);


describe('HOTEL SEARCH ACTIONS', function(){
    let sandbox;
    let store;

    const middlewares = [ thunk ];
    const mockStore = configureMockStore(middlewares);

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        store = mockStore({});
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('request not providing the city', function(){

        const expectedActions = [
        ];

        return store.dispatch(hotelSearch())
            .should.be.rejected
            .then( () => {
                expect(store.getActions()).to.be.deep.equals(expectedActions);
            });
    });

    it('request', function(){
        sandbox.stub(api, 'get', () => Promise.resolve(mockData.hotelSearch));

        const expectedActions = [
            {
                type: HOTEL_SEARCH_REQUEST,
            },
            {
                type: HOTEL_SEARCH_SUCCESS,
                ...mockData.hotelSearch,
            },
        ];

        return store.dispatch(hotelSearch({
            city: 'Sydney',
        }))
        .then(() =>{
            expect(store.getActions()).to.be.deep.equals(expectedActions);
        })

    });

    it('should sort by price-desc', function(){
        const expectedActions = [
            {
                type: HOTEL_SEARCH_SORT_BY_PRICE,
                direction: 'desc',
            },
        ];

        store.dispatch(sortBy('price-desc'));

        expect(store.getActions()).to.be.deep.equals(expectedActions);

    });

    it('should sort by price-asc', function(){
        const expectedActions = [
            {
                type: HOTEL_SEARCH_SORT_BY_PRICE,
                direction: 'asc',
            },
        ];

        store.dispatch(sortBy('price-asc'));

        expect(store.getActions()).to.be.deep.equals(expectedActions);

    });

    it('should sort by an unknown field', function(){
        const expectedActions = [];

        store.dispatch(sortBy('any unknown field name'));

        expect(store.getActions()).to.be.deep.equals(expectedActions);

    });

});
