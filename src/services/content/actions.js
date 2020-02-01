import {ADD_ROW, ADD_ELEMENT, ADD_COLUMN_INDEX, ADD_ROW_INDEX, ADD_SECTION, ADD_SECTION_INDEX, ADD_ELEMENT_INDEX, UPDATE_ELEMENT_VALUE} from './actionTypes';

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
export const addRowIndex = (index) => ({
    type: ADD_ROW_INDEX,
    payload: index
});
export const addSectionIndex = (index) => ({
    type: ADD_SECTION_INDEX,
    payload: index
});
export const addElementIndex = (index) => ({
    type: ADD_ELEMENT_INDEX,
    payload: index
});
export const updateElementValue = (data) => ({
    type: UPDATE_ELEMENT_VALUE,
    payload: data
});