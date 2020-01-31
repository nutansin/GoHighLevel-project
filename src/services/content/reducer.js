import {ADD_ROW, ADD_ELEMENT, ADD_COLUMN_INDEX, ADD_SECTION, ADD_SECTION_INDEX} from './actionTypes';

const initialState = {
  editor: [
            {section: [
                
            ]}
  ],
  element: {},
  index: 0,
  sectionIndex: 0,
  rowIndex:0
};


function addRowAndElementReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      var index = action.payload.index;
      state.editor[index].section.splice(index, 0, action.payload.rows);
      var editor1 = state.editor;
    return { 
        ...state,
        editor: editor1
    }
  case ADD_SECTION:
      var index = action.payload.index;
      state.editor.splice(index, 0, action.payload.section);
      const editor = state.editor;
    return { 
      ...state,
      editor: editor
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
  case ADD_SECTION_INDEX:
    return Object.assign({}, state, {
      sectionIndex: action.payload
    });
    default:
      return state;
  }
}

export default addRowAndElementReducer;