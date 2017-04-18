import {
    HOTEL_SEARCH_REQUEST,
    HOTEL_SEARCH_SUCCESS,
    HOTEL_SEARCH_SORT_BY_PRICE,
} from 'app/actions/action-types';

const initialState = Object.freeze({});


const convertRoom = (room) => ({
    ...room,
    qtyNights: 1,
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


function hotelSearchSuccess({query, sort_filters, hotels}){
    return {
        query,
        sort_filters,
        hotelsById: hotels.reduce( (byId, hotel) => Object.assign(byId, { [hotel.id]: convertHotel(hotel)} ), {}),
        hotelsIds: hotels.map(({id}) => id),
    };
}

function hotelSortByPrice(state){
    const hotelsIds = Object.keys(state.hotelsById)
        .map( id => ({ id, price: getPrice(state.hotelsById[id].room) }) )
        .sort( (a,b) => a.price - b.price)
        .map( hotel => hotel.id );
    return Object.assign({}, state, { hotelsIds });
}

export default function HotelSearch(state = initialState, {type: actionType, ...payload}) {
    switch (actionType) {
        case HOTEL_SEARCH_REQUEST:
            return { waiting: true };
        case HOTEL_SEARCH_SUCCESS:
            return hotelSearchSuccess(payload);
        case HOTEL_SEARCH_SORT_BY_PRICE:
            return hotelSortByPrice(state);
    default:
        return state;
    }
}
