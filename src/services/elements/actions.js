import {ADD_HEADLINE, ADD_IMAGE, EDITOR_DATA, ADD_PARAGRAPH, ADD_LIST} from './actionTypes';

export const addHeadline = (text) => ({
    type: ADD_HEADLINE,
    payload: text
});

export const addParagraph = (text) => ({
    type: ADD_PARAGRAPH,
    payload: text
});

export const addList = (list) => ({
    type: ADD_LIST,
    payload: list
});

export const  addImage = (file) => ({
    type: ADD_IMAGE,
    payload: file
});

export const  editorData = (data) => ({
    type: EDITOR_DATA,
    payload: data
});