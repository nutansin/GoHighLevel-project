import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import combineReducers from '../src/services/reducers';
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

export const findByTestAtrr = (component, attr) => {
    console.log(component);
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(combineReducers, initialState);
};