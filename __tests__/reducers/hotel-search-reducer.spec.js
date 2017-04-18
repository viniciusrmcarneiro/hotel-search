import {expect} from 'chai';

import mockData from '../mock-data'

import {
    HOTEL_SEARCH_REQUEST,
    HOTEL_SEARCH_SUCCESS,
    HOTEL_SEARCH_SORT_BY_PRICE,
} from 'app/actions/action-types';

import reducer from 'app/reducers/hotel-search-reducer';

describe('HOTEL SEARCH REDUCER', () => {

    it('should return the initial state', () => {
        const expectedState = {};
        expect(reducer(undefined, {})).to.be.deep.equals(expectedState);
    });

    it('should handle HOTEL_SEARCH_REQUEST', () => {
        const expectedState = {
            waiting: true,
        };

        const action = {
            type: HOTEL_SEARCH_REQUEST,
        };
        
        const currentState = { 
            ...mockData.hotelSearchStore,
        };
        
        expect(reducer(currentState, action))
            .to.be.deep.equals(expectedState);
    });

    it('should handle HOTEL_SEARCH_SUCCESS', () => {

        const { query, hotels, sort_filters, hotelsById, hotelsIds, } = mockData.hotelSearchStore;

        const expectedState = {
            query,
            sort_filters,
            hotelsById,
            hotelsIds,
        };
        
        const currentState = reducer(undefined, { type: HOTEL_SEARCH_REQUEST });

        const action = {
            type: HOTEL_SEARCH_SUCCESS,
            ...mockData.hotelSearch,
        };

        expect(reducer(currentState, action))
            .to.be.deep.equals(expectedState);
    });

    it('should handle HOTEL_SEARCH_SORT_BY_PRICE', () => {

        const { query, hotels, sort_filters, hotelsById, } = mockData.hotelSearchStore;

        const expectedState = {
            query,
            sort_filters,
            hotelsById,
            hotelsIds: mockData.hotelIdsByPrice,
        };
        
        const currentState = mockData.hotelSearchStore;

        const action = {
            type: HOTEL_SEARCH_SORT_BY_PRICE,
        };

        expect(reducer(currentState, action))
            .to.be.deep.equals(expectedState);
    });

});
