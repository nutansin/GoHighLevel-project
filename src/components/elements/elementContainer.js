import React, { Component } from 'react'
import {connect} from 'react-redux';
import ElementList from './elementList';

class ElementContainer extends Component {

    render() {
        return (
            <div>
                {
                    this.props.elementList && this.props.elementList.map((elements, index)=> {
                        return (
                            <ElementList element={elements.element} 
                                        rowIndex={this.props.rowIndex}
                                        sectionIndex={this.props.sectionIndex}
                                        columnIndex={this.props.columnIndex} 
                                        key={index} 
                                        index={index} 
                                        
                            />
                        )
                    })
                }
            </div>
            
            
        )
    }
}
const mapStateToProps = (state) => ({
    editor: state.data.editor
});
export default connect(
    mapStateToProps
)(ElementContainer);