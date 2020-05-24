import * as types from './actionTypes';

export const addRow = (rows) => ({
    type: types.ADD_ROW,
    payload: rows
});

export const addElement = (element) => ({
    type: types.ADD_ELEMENT,
    payload: element
});

export const addSection = (section) => ({
    type: types.ADD_SECTION,
    payload: section
});

export const addColumnIndex = (index) => ({
    type: types.ADD_COLUMN_INDEX,
    payload: index
});
export const addRowIndex = (index) => ({
    type: types.ADD_ROW_INDEX,
    payload: index
});
export const addSectionIndex = (index) => ({
    type: types.ADD_SECTION_INDEX,
    payload: index
});
export const addElementIndex = (index) => ({
    type: types.ADD_ELEMENT_INDEX,
    payload: index
});
export const updateElementValue = (data) => ({
    type: types.UPDATE_ELEMENT_VALUE,
    payload: data
});