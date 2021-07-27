import {createStore, combineReducers} from 'redux';

import cartProducts from './reducers/cartProducts'

const reducer = combineReducers({
    cartProducts
});

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;