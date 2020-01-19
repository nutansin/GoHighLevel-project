import {applyMiddleware, createStore, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducer from './reducers';

const initialState = {};

const store = createStore(
    combineReducer,
    initialState,
    compose(
        applyMiddleware(thunkMiddleware)
    )
);

export default store;