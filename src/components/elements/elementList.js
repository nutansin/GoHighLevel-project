import React, { Component } from 'react';
import {connect} from 'react-redux';
import {openElementWidget, openHeadlineEditor, openImageEditor, openParagraphEditor, openListEditor, enableElement} from '../../services/widgets/actions';
import {editorData} from '../../services/elements/actions';
import {addColumnIndex, addRowIndex, addSectionIndex, addElementIndex} from '../../services/content/actions';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faCopy, faCog } from '@fortawesome/free-solid-svg-icons';
import Headline from './headline.js';
import Image from './image.js';
import Paragraph from './paragraph';
import List from './list.js';

export class ElementList extends Component {

    state = {
        isHovered: false
    }

    hoverIn = () => {
        this.setState({
            isHovered: true
        });
    }
    hoverOut = () => {
        this.setState({
            isHovered: false
        });
    }

    openEditor = (element) => {
        
        if(element.type == 'Headline') {
            this.props.editorData({type:'Headline', value: element.value});
            this.props.openHeadlineEditor();
            
        } else if(element.type == 'Image') {
            this.props.editorData({type:'Image', value: element.value});
            this.props.openImageEditor();

        } else if(element.type == 'Paragraph') {
            this.props.editorData({type:'Paragraph', value: element.value});
            this.props.openParagraphEditor();
            
        } else if(element.type == 'BulletList') {
            this.props.editorData({type:'BulletList', value: element.value});
            this.props.openListEditor();

        }
        this.props.addElementIndex(this.props.index);
        this.props.addColumnIndex(this.props.columnIndex);
        this.props.addRowIndex(this.props.rowIndex);
        this.props.addSectionIndex(this.props.sectionIndex);
    }

    renderElement = (element) => {
        switch(element.type) {
          case 'Headline':
            return <Headline text={element.value}/>;
          case 'Image':
            return <Image source={element.value}/>;
          case 'Paragraph':
            return <Paragraph text={element.value}/>;
          case 'BulletList':
            return <List list={element.value}/>;
          default:
            return null;
        }
    }
    addNodeIndex = () => {
        this.props.addColumnIndex(this.props.columnIndex);
        this.props.addRowIndex(this.props.rowIndex);
        this.props.addSectionIndex(this.props.sectionIndex);
    }

    render() {
        return (
            <div className={ classnames('hl_page-creator--element', this.state.isHovered?'active':null)} onMouseEnter={() => this.hoverIn()} onMouseLeave={()=> this.hoverOut()}>
                <div className="hl_page-creator--actions">
                    <div className="more-actions">
                        <span data-tooltip="tooltip" data-placement="left" title="Settings"><FontAwesomeIcon icon={faCog}  onClick={()=> {this.openEditor(this.props.element);}}/></span>
                        <span data-tooltip="tooltip" data-placement="left" title="Clone"><FontAwesomeIcon icon={faEye} /></span>
                        <span data-tooltip="tooltip" data-placement="left" title="Save"><FontAwesomeIcon icon={faCopy} /></span>
                        <span data-tooltip="tooltip" data-placement="left" title="Delete"><FontAwesomeIcon icon={faTrash}/></span>
                    </div>
                </div>
                <span className="add-new-element" 
                    onClick={()=>{this.props.openElementWidget(); this.addNodeIndex(); this.props.enableElement()}} 
                    data-tooltip="tooltip" data-placement="bottom" title="Add New Element"><i className="icon icon-plus"></i>
                </span>

                <div className="element-container">
                    {
                        this.renderElement(this.props.element)
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    editor: state.data.editor
});

export default connect(
    mapStateToProps, 
    {openElementWidget, openImageEditor, openHeadlineEditor, openParagraphEditor, openListEditor, editorData, enableElement, addColumnIndex, addRowIndex, addSectionIndex, addElementIndex}
)(ElementList);