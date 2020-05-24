import React from 'react';
import { Provider } from 'react-redux';
import {Content} from '../index';
import {shallow} from 'enzyme'
import * as enzyme from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });


describe('Content component', () => {
    let wrapper;

    wrapper = shallow(<Content />);
   
    it('should render basic component', ()=>{
        expect(wrapper.find('.content-wrapper').length).toEqual(1)
        // expect(wrapper).toMatchSnapshot();
    })
});