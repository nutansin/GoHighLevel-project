import React from 'react';
import {Section} from '../../content/section';
import {shallow} from 'enzyme'
import * as enzyme from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });


describe('Section component', () => {
    let wrapper, minProps, addSectionMock, updateNodeMock, addSectionIndexMock, enableRowMock, openRowWidgetMock;

    beforeEach(()=> {
        addSectionMock = jest.fn();
        updateNodeMock = jest.fn();
        addSectionIndexMock = jest.fn();
        enableRowMock = jest.fn();
        openRowWidgetMock = jest.fn();
        minProps = {
            addSection: addSectionMock,
            updateNodeIndex: updateNodeMock,
            addSectionIndex: addSectionIndexMock,
            enableRow: enableRowMock,
            openRowWidget: openRowWidgetMock,
            section: [],
            sectionNode: {
                section: {section:[]},
                index: 1
            },
            index: 1
        };
        wrapper = shallow(<Section {...minProps} />);
    
    });

    it('basic section should render', () => {
        expect(wrapper.find('.section-wrapper').length).toEqual(1);
    });

    it('test mouse enter on section', () => {
        wrapper.find('.section-wrapper').simulate('mouseEnter');
        expect( wrapper.find('.section-wrapper').hasClass('active')).toEqual(true);
    });

    it('test mouse leave on section', () => {
        wrapper.find('.section-wrapper').simulate('mouseLeave');
        expect( wrapper.find('.section-wrapper').hasClass('active')).toEqual(false);
    });

    it('test add new section on section', () => {
        let addNewSectionButton = wrapper.find('.add-new-section');
        addNewSectionButton.simulate('click');

        expect(addSectionMock).toHaveBeenCalledWith(minProps.sectionNode);
    });

    it('test row widget modal class', () => {

        let btnSlim = wrapper.find('.btn-slim');
        btnSlim.simulate('click');

        expect(openRowWidgetMock).toHaveBeenCalled();
    });
    

});