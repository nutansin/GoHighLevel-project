import {ADD_ROW, ADD_ELEMENT, ADD_COLUMN_INDEX, ADD_SECTION, ADD_SECTION_INDEX} from './actionTypes';

export const addRow = (rows, index) => ({
    type: ADD_ROW,
    payload: {'rows':rows, 'sectionIndex': index}
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
export const addSectionIndex = (index) => ({
    type: ADD_SECTION_INDEX,
    payload: index
});