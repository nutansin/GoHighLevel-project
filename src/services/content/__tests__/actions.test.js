import React from 'react';
import * as actions from '../../../services/content/actions';
import * as types from '../../../services/content/actionTypes';

describe('actions', () => {
    it('Should create an action to add row', () => {
        const payload = {rows: []}
        const expectedAction = {
            type: types.ADD_ROW,
            payload
        }
        expect(actions.addRow(payload)).toEqual(expectedAction);
    });
});