import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addColumnIndex} from '../../services/content/actions';
import ElementList from './elementList';


class ElementContainer extends Component {

    state = {
        elementList: []
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.columnIndex === this.props.columnIndex && Object.keys(nextProps.element).length>0 && nextProps.element.columnIndex === this.props.columnIndex) {
        
            this.setState(state => {
                state.elementList.push(nextProps.element);
                const list = state.elementList;
                return {
                  list
                }
            });

            
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.elementList && this.state.elementList.map((element, index)=> {
                        return (
                            <ElementList element={element} columnIndex={this.props.columnIndex} key={index} elementIndex={index} addColumnIndex={(index)=>this.props.addColumnIndex(index)}/>
                        )
                    })
                }
            </div>
            
            
        )
    }
}

export default connect(
    null, 
    { addColumnIndex }
)(ElementContainer);