import api from 'app/actions/api-actions';

import {
    HOTEL_SEARCH_REQUEST,
    HOTEL_SEARCH_SUCCESS,
    HOTEL_SEARCH_SORT_BY_PRICE,
} from 'app/actions/action-types';

export const hotelSearch = ({city}) => dispatch => {

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

        });
    
}

export const sortBy = (fieldName) => (dispatch, getState) => {
    if (fieldName !== 'price') {
        return;
    }

    dispatch({
        type: HOTEL_SEARCH_SORT_BY_PRICE,
    });
}
