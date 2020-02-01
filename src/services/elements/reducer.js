import {EDITOR_DATA} from './actionTypes';

const initialState = {
  commonData: null
};

function addElementsData(state = initialState, action) {
  switch (action.type) {
    case EDITOR_DATA:
      return Object.assign({}, state, {
        commonData: action.payload
      });
  default:
      return state;
  }
}

export default addElementsData;