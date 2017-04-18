import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'app/reducers';

export default (state) => createStore(reducers, state, applyMiddleware(thunk));
