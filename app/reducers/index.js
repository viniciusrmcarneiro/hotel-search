import { combineReducers } from 'redux';

import hotelSearch from './hotel-search-reducer';

export const reducers = {
    hotelSearch,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;
