import React from 'react';
import {NewColumn} from '../../content/newColumn';
import {shallow} from 'enzyme'
import * as enzyme from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

describe('render basic new column without crashing', () => {
    let wrapper;

    beforeEach(()=>{

        wrapper = shallow(<NewColumn />)
    })

    it('', () => {
        
    });
    
});