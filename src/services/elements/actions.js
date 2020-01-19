import {ADD_HEADLINE, ADD_IMAGE} from './actionTypes';

export const addHeadline = (text) => ({
    type: ADD_HEADLINE,
    payload: text
});

export const  addImage = (file) => ({
    type: ADD_IMAGE,
    payload: file
});