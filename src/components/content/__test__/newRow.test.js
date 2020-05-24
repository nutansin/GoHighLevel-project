import React from 'react';
import {NewRow} from '../../content/newRow';
import {shallow} from 'enzyme'
import * as enzyme from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

describe('render basic new column without crashing', () => {
    let wrapper, minProps, addSectionIndexMock, enableRowMock, openRowWidgetMock;

    beforeEach(()=>{
        addSectionIndexMock = jest.fn();
        enableRowMock = jest.fn();
        openRowWidgetMock = jest.fn();
        minProps = {
            rows: [],
            index: 0,
            openRowWidget: openRowWidgetMock,
            addSectionIndex: addSectionIndexMock,
            enableRow: enableRowMock
        },
        wrapper = shallow(<NewRow {...minProps}/>);
    });

    it('add active class on hover', () => {
        wrapper.find('.row-wrapper').simulate('mouseEnter');
        expect( wrapper.find('.row-wrapper').hasClass('active')).toEqual(true);
    });

    it('remove active class on hover', () => {
        wrapper.find('.row-wrapper').simulate('mouseLeave');
        expect( wrapper.find('.row-wrapper').hasClass('active')).toEqual(false);
    });

    it('add data-order attribute on click', () => {
        wrapper.find('.icon-arrow-up-2').simulate('click');
        // expect(wrapper.attr('data-order')).toBe(true);
    });
    it('add new row on click', () => {
        wrapper.find('.add-new-row').simulate('click');
        expect(openRowWidgetMock).toHaveBeenCalled();
    });
    


    
});
