import {
    HOTEL_SEARCH_REQUEST,
    HOTEL_SEARCH_SUCCESS,
    HOTEL_SEARCH_SORT_BY_PRICE,
} from 'app/actions/action-types';

const initialState = Object.freeze({});


const getValue = (value) => parseFloat(value.replace(/[^\d\.]/g, ''));

const convertRoom = (room) => ({
    ...room,
    price: getValue(room.price),
    savings: getValue(room.savings),
    qtyNights: "1",
});


const getCheapestRoom = (rooms) => {
    var cheapest = null;
    
    for (var i = 0; i < rooms.length;  i++) {
        if (cheapest == null || rooms[i].price < cheapest.price) {
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

function hotelSortByPrice(state, asc){
    const onCompare = asc 
        ? (a,b) => a.price - b.price
        : (a,b) => b.price - a.price;

    const hotelsIds = Object.keys(state.hotelsById)
        .map( id => ({ id, price: state.hotelsById[id].room.price }) )
        .sort( onCompare )
        .map( hotel => hotel.id );
    return Object.assign({}, state, { hotelsIds, sortedField: `price-${asc ? 'asc' : 'desc' }` });
}

export default function HotelSearch(state = initialState, {type: actionType, ...payload}) {
    switch (actionType) {
        case HOTEL_SEARCH_REQUEST:
            return { waiting: true };
        case HOTEL_SEARCH_SUCCESS:
            return hotelSortByPrice(hotelSearchSuccess(payload), true);
        case HOTEL_SEARCH_SORT_BY_PRICE:
            return hotelSortByPrice(state, payload.direction === 'asc');
    default:
        return state;
    }
}
