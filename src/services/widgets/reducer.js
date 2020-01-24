import {OPEN_ROW_WIDGET, CLOSE_ROW_WIDGET, OPEN_ELEMENT_WIDGET, CLOSE_ELEMENT_WIDGET, DISABLE_ELEMENT, ENABLE_ELEMENT,DISABLE_ROW,ENABLE_ROW, OPEN_HEADLINE_EDITOR, CLOSE_HEADLINE_EDITOR, OPEN_IMAGE_EDITOR, CLOSE_IMAGE_EDITOR, OPEN_PARAGRAPH_EDITOR, CLOSE_PARAGRAPH_EDITOR, OPEN_LIST_EDITOR, CLOSE_LIST_EDITOR} from './actionTypes';

const initialState = {
  rowWidgetOpen: false,
  elementWidgetOpen: false,
  elementEnabled: true,
  rowEnabled: true,
  imageEditorOpen: false,
  headlineEditorOpen: false,
  paragraphEditorOpen: false,
  listEditorOpen: false
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
    case DISABLE_ELEMENT:
        return Object.assign({}, state, {
          elementEnabled: false
        });
    case DISABLE_ROW:
        return Object.assign({}, state, {
          rowEnabled: false
        });
    case ENABLE_ROW:
        return Object.assign({}, state, {
          rowEnabled: true
        });
    case ENABLE_ELEMENT:
        return Object.assign({}, state, {
          elementEnabled: true
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
    case OPEN_PARAGRAPH_EDITOR:
        return Object.assign({}, state, {
          paragraphEditorOpen : true
        });
    case CLOSE_PARAGRAPH_EDITOR:
        return Object.assign({}, state, {
          paragraphEditorOpen : false
        });
    case OPEN_LIST_EDITOR:
        return Object.assign({}, state, {
          listEditorOpen : true
        });
    case CLOSE_LIST_EDITOR:
        return Object.assign({}, state, {
          listEditorOpen : false
        });
    default:
        return state;
      }
}

export default widgetManager;