import * as types from './actionTypes';

export const initialState = {
  editor: [
            {section: [
                
            ]}
  ],
  sectionIndex: null,
  columnIndex:null,
  rowIndex:null,
  elementIndex:null
};


function addRowAndElementReducer(state = initialState, action) {
  switch (action.type) {
      case types.ADD_ROW:
        var index = action.payload.index;
        state.editor[index].section.push(action.payload.rows);
        var editor = state.editor;
      return { 
          ...state,
          editor: [...editor]
      }
      case types.ADD_SECTION:
          var index = action.payload.index;
          state.editor.push(action.payload.section);
          var editor = state.editor;

          return { 
            ...state,
            editor: [...editor]
          }
      case types.ADD_ELEMENT:
          var sectionIndex = action.payload.sectionIndex;
          var rowIndex = action.payload.rowIndex;
          var columnIndex = action.payload.columnIndex;

          state.editor[sectionIndex].section[rowIndex].rows[columnIndex].column.push(action.payload.element);
          var editor = state.editor;
          return { 
              ...state,
              editor: [...editor]
          }
      case types.UPDATE_ELEMENT_VALUE:
          var sectionIndex = action.payload.sectionIndex;
          var rowIndex = action.payload.rowIndex;
          var columnIndex = action.payload.columnIndex;
          var elementIndex = action.payload.elementIndex;

          var element = JSON.stringify(state.editor[sectionIndex].section[rowIndex].rows[columnIndex].column[elementIndex].element);
          var updateElement = JSON.parse(element);
          updateElement.value = action.payload.value;
          state.editor[sectionIndex].section[rowIndex].rows[columnIndex].column[elementIndex].element = updateElement;
          
          var editor = state.editor;
          return { 
              ...state,
              editor: [...editor]
          }
      case types.ADD_COLUMN_INDEX:
        return Object.assign({}, state, {
          columnIndex: action.payload
        });
      case types.ADD_SECTION_INDEX:
        return Object.assign({}, state, {
          sectionIndex: action.payload
        });
      case types.ADD_ROW_INDEX:
        return Object.assign({}, state, {
          rowIndex: action.payload
        });
      case types.ADD_ELEMENT_INDEX:
        return Object.assign({}, state, {
          elementIndex: action.payload
        });
        default:
          return state;
      }
}

export default addRowAndElementReducer;