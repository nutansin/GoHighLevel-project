import {OPEN_ROW_WIDGET, CLOSE_ROW_WIDGET, OPEN_ELEMENT_WIDGET, CLOSE_ELEMENT_WIDGET, DISABLE_ELEMENT, ENABLE_ELEMENT, OPEN_IMAGE_EDITOR, CLOSE_IMAGE_EDITOR, OPEN_HEADLINE_EDITOR, CLOSE_HEADLINE_EDITOR} from './actionTypes';

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