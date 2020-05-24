import React, { Component } from 'react';
import {connect} from 'react-redux';
import {openElementWidget, closeElementWidget, enableElement} from '../../services/widgets/actions';
import {addColumnIndex, addRowIndex, addSectionIndex, addElement} from '../../services/content/actions';
import ElementContainer from '../elements/elementContainer';

export class NewColumn extends Component {

    dropElement = (e) => {
        if(!e.dataTransfer.types.includes('element')) {
            return;
        }

        var element = JSON.parse(e.dataTransfer.getData("element"));
        var data = {
            element: {element: element},
            columnIndex: this.props.index,
            rowIndex: this.props.rowIndex,
            sectionIndex: this.props.sectionIndex
        }

        this.props.addElement(data);
        this.props.closeElementWidget();
    }

    dragOver = (e) => {
        e.preventDefault();
    }

    addNodeIndex = () => {
        this.props.addColumnIndex(this.props.index);
        this.props.addRowIndex(this.props.rowIndex);
        this.props.addSectionIndex(this.props.sectionIndex);
    }

    render() {
        return (
            <div className="hl_page-creator--column" onDrop={(e)=>this.dropElement(e)} onDragOver={(e)=>this.dragOver(e)}>
                {
                    this.props.column && this.props.column.length>0?  <ElementContainer
                                                                        rowIndex={this.props.rowIndex}
                                                                        sectionIndex={this.props.sectionIndex}
                                                                        elementList={this.props.column} 
                                                                        columnIndex={this.props.index}
                                                                    />:
                                                                    <div className="new-element-blank">
                                                                            <span className="btn btn-light6 btn-slim" onClick={()=>{this.props.openElementWidget(); this.addNodeIndex(); this.props.enableElement()}}>Add New Element</span>
                                                                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    editor: state.data.editor
});
export default connect(
    mapStateToProps, 
    {openElementWidget, addColumnIndex, addRowIndex, addSectionIndex, closeElementWidget, enableElement, addElement}
)(NewColumn);