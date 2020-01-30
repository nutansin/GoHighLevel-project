import {ADD_ROW, ADD_ELEMENT, ADD_COLUMN_INDEX, ADD_SECTION} from './actionTypes';

export const addRow = (rows) => ({
    type: ADD_ROW,
    payload: rows
});

export const addElement = (element) => ({
    type: ADD_ELEMENT,
    payload: element
});

export const addSection = (section) => ({
    type: ADD_SECTION,
    payload: section
});


export const addColumnIndex = (index) => ({
    type: ADD_COLUMN_INDEX,
    payload: index
});