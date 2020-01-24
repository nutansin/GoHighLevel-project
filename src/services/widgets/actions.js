import {OPEN_ROW_WIDGET, CLOSE_ROW_WIDGET, OPEN_ELEMENT_WIDGET, CLOSE_ELEMENT_WIDGET, DISABLE_ELEMENT, ENABLE_ELEMENT,ENABLE_ROW, DISABLE_ROW, OPEN_IMAGE_EDITOR, CLOSE_IMAGE_EDITOR, OPEN_HEADLINE_EDITOR, CLOSE_HEADLINE_EDITOR, OPEN_PARAGRAPH_EDITOR, CLOSE_PARAGRAPH_EDITOR, OPEN_LIST_EDITOR, CLOSE_LIST_EDITOR} from './actionTypes';

export const openRowWidget = (status) => ({
    type: OPEN_ROW_WIDGET,
    payload: status
});

export const closeRowWidget = (status) => ({
    type: CLOSE_ROW_WIDGET,
    payload: status
});

export const openElementWidget = (status) => ({
    type: OPEN_ELEMENT_WIDGET,
    payload: status
});

export const closeElementWidget = (status) => ({
    type: CLOSE_ELEMENT_WIDGET,
    payload: status
});

export const disableElement = (status) => ({
    type: DISABLE_ELEMENT,
    payload: status
});
export const disableRow = (status) => ({
    type: DISABLE_ROW,
    payload: status
});
export const enableRow = (status) => ({
    type: ENABLE_ROW,
    payload: status
});
export const enableElement = (status) => ({
    type: ENABLE_ELEMENT,
    payload: status
});

export const openImageEditor = (status) => ({
    type: OPEN_IMAGE_EDITOR,
    payload: status
});

export const closeImageEditor = (status) => ({
    type: CLOSE_IMAGE_EDITOR,
    payload: status
});

export const openHeadlineEditor = (status) => ({
    type: OPEN_HEADLINE_EDITOR,
    payload: status
});

export const closeHeadlineEditor = (status) => ({
    type: CLOSE_HEADLINE_EDITOR,
    payload: status
});

export const openParagraphEditor = (status) => ({
    type: OPEN_PARAGRAPH_EDITOR,
    payload: status
});

export const closeParagraphEditor = (status) => ({
    type: CLOSE_PARAGRAPH_EDITOR,
    payload: status
});

export const openListEditor = (status) => ({
    type: OPEN_LIST_EDITOR,
    payload: status
});

export const closeListEditor = (status) => ({
    type: CLOSE_LIST_EDITOR,
    payload: status
});