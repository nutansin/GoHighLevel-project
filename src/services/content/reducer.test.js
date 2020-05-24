import React from 'react';
import addRowAndElementReducer, {initialState} from '../../services/content/reducer';
import * as types from '../../services/content/actionTypes';

describe('reducer', () => {
  
    it('return initial state', () => {
        expect(addRowAndElementReducer(undefined, {})).toEqual(
            {
                editor: [
                    {section: [
                        
                    ]}
                ],
                sectionIndex: null,
                columnIndex:null,
                rowIndex:null,
                elementIndex:null
            }
        )
    });

    it('should handle add row', () => {
        const payload = {
            rows: {rows: []},
            index: 0
        }
        const editor = [
            {section: [
                {rows: []}
            ]}
        ]

        expect(
            addRowAndElementReducer(initialState, {
            type: types.ADD_ROW,
            payload
          })
        ).toEqual({
            ...initialState, editor: [...editor]
        })
    })

    it('should handle add section', () => {
        const payload = {
            section: {section:[]},
            index: 1
        }

        const editor = [
            {section: [{rows: []}]},
            {section: []}
        ]
        expect(
            addRowAndElementReducer(initialState, {
                type: types.ADD_SECTION,
                payload
            })
        ).toEqual({
            ...initialState, editor: [...editor]
        })

    });
    
});
