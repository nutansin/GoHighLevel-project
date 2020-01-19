import {OPEN_ROW_WIDGET, CLOSE_ROW_WIDGET, OPEN_ELEMENT_WIDGET, CLOSE_ELEMENT_WIDGET, OPEN_HEADLINE_EDITOR, CLOSE_HEADLINE_EDITOR, OPEN_IMAGE_EDITOR, CLOSE_IMAGE_EDITOR} from './actionTypes';

const initialState = {
  rowWidgetOpen: false,
  elementWidgetOpen: false,
  imageEditorOpen: false,
  headlineEditorOpen: false
};

function widgetManager(state = initialState, action) {
  switch (action.type) {
    case OPEN_ROW_WIDGET:
        return Object.assign({}, state, {
          rowWidgetOpen: true
        });
    case CLOSE_ROW_WIDGET:
        return Object.assign({}, state, {
          rowWidgetOpen: false
        });
    case OPEN_ELEMENT_WIDGET:
        return Object.assign({}, state, {
          elementWidgetOpen: true
        });
    case CLOSE_ELEMENT_WIDGET:
        return Object.assign({}, state, {
          elementWidgetOpen: false
        });
    case OPEN_HEADLINE_EDITOR:
        return Object.assign({}, state, {
          headlineEditorOpen   : true
        });
    case CLOSE_HEADLINE_EDITOR:
        return Object.assign({}, state, {
          headlineEditorOpen : false
        });
    case OPEN_IMAGE_EDITOR:
        return Object.assign({}, state, {
          imageEditorOpen : true
        });
    case CLOSE_IMAGE_EDITOR:
        return Object.assign({}, state, {
          imageEditorOpen : false
        });
    default:
        return state;
      }
}

export default widgetManager;