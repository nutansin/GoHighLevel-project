import {ADD_HEADLINE, ADD_IMAGE} from './actionTypes';

const initialState = {
  headlineText: null,
  image: null
};

function addElementsData(state = initialState, action) {
  switch (action.type) {
    case ADD_HEADLINE:
      return Object.assign({}, state, {
        headlineText: action.payload
      });
    case ADD_IMAGE:
      return Object.assign({}, state, {
        image: action.payload
      });
  default:
      return state;
  }
}

export default addElementsData;