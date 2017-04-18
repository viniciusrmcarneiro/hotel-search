import api from 'app/actions/api-actions';

import {
    HOTEL_SEARCH_REQUEST,
    HOTEL_SEARCH_SUCCESS,
    HOTEL_SEARCH_SORT_BY_PRICE,
} from 'app/actions/action-types';

export const hotelSearch = (payload) => dispatch => {

    if (!payload || !payload.city) {
        return Promise.reject('Invalid parameters');
    }

    const {city} = payload;

    dispatch({type: HOTEL_SEARCH_REQUEST});

    return api.get({city})
        .then( ({query, sort_filters, hotels}) => {

            const value = {
                type: HOTEL_SEARCH_SUCCESS,
                query,
                sort_filters,
                hotels,
            };

            dispatch(value);

        })
        
        /*
        
        TODO: handle error from the request
        .catch( ex => {
            
        })
        
        */

}

export const sortBy = (fieldName) => (dispatch, getState) => {
    if (/^price-(asc|desc)$/.test(fieldName) === false) {
        return;
    }

    dispatch({
        type: HOTEL_SEARCH_SORT_BY_PRICE,
        direction: fieldName.replace(/^(.*)-(asc|desc)$/,"$2"),
    });
}
