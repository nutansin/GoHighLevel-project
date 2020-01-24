import {ADD_HEADLINE, ADD_IMAGE, EDITOR_DATA, ADD_PARAGRAPH, ADD_LIST} from './actionTypes';

const initialState = {
  headlineText: null,
  image: null,
  commonData: null,
  paragraph: null,
  list: []
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
    case ADD_PARAGRAPH:
      return Object.assign({}, state, {
        paragraph: action.payload
      });
    case ADD_LIST:
      return Object.assign({}, state, {
        list: new Array(...action.payload)
      });
    case EDITOR_DATA:
      return Object.assign({}, state, {
        commonData: action.payload
      });
  default:
      return state;
  }
}

export default addElementsData;