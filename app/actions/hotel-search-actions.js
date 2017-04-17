import api from 'app/actions/api-actions';

import {
    HOTEL_SEARCH_REQUEST,
    HOTEL_SEARCH_SUCCESS,
    HOTEL_SEARCH_SORT_BY_PRICE,
} from 'app/actions/action-types';

const convertRoom = ({points_earned: pointsEarned, free_cancellation: freeCancellation, qtyNights = 1,...room,}) => ({
    ...room,
    freeCancellation,
    pointsEarned,
    qtyNights,
});

const getPrice = (room) => parseFloat(room.price.replace('$', ''));

const getCheapestRoom = (rooms) => {
    var cheapest = null;
    
    for (var i = 0; i < rooms.length;  i++) {
        if (cheapest == null || getPrice(rooms[i].price) < getPrice(cheapest.price)) {
            cheapest = rooms[i];
        }
    }

    return cheapest;
}

const convertHotel = ({rooms, ...hotel}) => ({
    ...hotel,
    room: convertRoom(getCheapestRoom(rooms)),
});

export const hotelSearch = ({city}) => dispatch => {

    dispatch({type: HOTEL_SEARCH_REQUEST});

    return api.get({city})
        .then( ({query, sort_filters, hotels}) => {

            const value = {
                type: HOTEL_SEARCH_SUCCESS,
                query,
                sort_filters,
                hotelsById: hotels.reduce((byId,hotel) => Object.assign(byId, { [hotel.id]: convertHotel(hotel)} ), {}),
                hotelsIds: hotels.map(({id}) => id),
            };

            dispatch(value);

        });
    
}

export const sortByPrice = () => (dispatch, getState) => {
    const state = getState().hotelSearch
    const hotelsIds = Object.keys(state.hotelsById)
        .map( id => ({ id, price: getPrice(state.hotelsById[id].room) }) )
        .sort( (a,b) => a.price - b.price)
        .map( hotel => hotel.id );

    dispatch({
        type: HOTEL_SEARCH_SORT_BY_PRICE,
        hotelsIds,
    });
}
