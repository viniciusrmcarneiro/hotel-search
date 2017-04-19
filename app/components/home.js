import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Store from 'app/store';
import { hotelSearch } from 'app/actions/hotel-search-actions';

import HotelList from 'app/components/hotel-list';
import SearchHeader from 'app/components/search-header';

import styles from './components.styl';

class Home extends Component {
    constructor(props){
        super();
        this.state = {
            store: props.store || Store(),
        }

        // TODO: some hard-code, just because 
        // it's was supposed to have context from another page
        this.state.store.dispatch(hotelSearch({city: 'Sydney'}))
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <div className="home">

                    <SearchHeader />
                    <HotelList />

                </div>
            </Provider>
        )
    }
}

Home.displayName = "Home";

export default Home;
