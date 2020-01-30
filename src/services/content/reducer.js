import {ADD_ROW, ADD_ELEMENT, ADD_COLUMN_INDEX, ADD_SECTION} from './actionTypes';

const initialState = {
  section: [
    {
      rows: [] 
    }
  ],
  element: {},
  index: null
};

function addRowAndElementReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
    return { 
      ...state,
      rows: [...state.rows, action.payload]
  }
  case ADD_SECTION:
    return { 
      ...state,
      section: [...state.section, action.payload]
  }
  case ADD_ELEMENT:
    return { 
      ...state,
      element: Object.assign({}, action.payload)
  }
  case ADD_COLUMN_INDEX:
    return Object.assign({}, state, {
      index: action.payload
    });
    default:
      return state;
  }
}

export default addRowAndElementReducer;