import React, { Component } from 'react';
import {connect} from 'react-redux';
import {openElementWidget, openHeadlineEditor, openImageEditor, openParagraphEditor, openListEditor, enableElement} from '../../services/widgets/actions';
import {editorData} from '../../services/elements/actions';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faCopy, faCog } from '@fortawesome/free-solid-svg-icons';
import Headline from './headline.js';
import Image from './image.js';
import Paragraph from './paragraph';
import List from './list.js';

export class ElementList extends Component {

    state = {
        isHovered: false,
        image: null,
        headlineText: '',
        paragraph: '',
        list: [{item: ''}, {item: ''}, {item: ''}]
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.commonData) {
            return;
        }
        if(nextProps.index === this.props.columnIndex && nextProps.commonData.index === this.props.elementIndex) {
            if(nextProps.commonData.type == 'Headline' && nextProps.element.type == 'Headline' && nextProps.headlineText != this.props.headlineText) {
                this.setState({
                    headlineText: nextProps.headlineText
                })
            } else if (nextProps.commonData.type == 'Image' && nextProps.element.type == 'Image' && nextProps.image != this.props.image) {
                this.setState({
                    image: nextProps.image
                })
            } else if (nextProps.commonData.type == 'Paragraph' && nextProps.element.type == 'Paragraph' && nextProps.paragraph != this.props.paragraph) {
                this.setState({
                    paragraph: nextProps.paragraph
                })
            } else if (nextProps.commonData.type == 'BulletList' && nextProps.element.type == 'BulletList' && nextProps.list != this.props.list) {
                this.setState(state => {
                    state.list = nextProps.list;
                    const list = state.list;
                    return {
                        list
                    }
                });
            }
        }
        
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

    openEditor = (elementType) => {

        
        if(elementType == 'Headline') {
            this.props.editorData({type:'Headline', value: this.state.headlineText, index: this.props.elementIndex});
            this.props.openHeadlineEditor();
            
        } else if(elementType == 'Image') {
            this.props.editorData({type:'Image', value: '', index: this.props.elementIndex});
            this.props.openImageEditor();

        } else if(elementType == 'Paragraph') {
            this.props.editorData({type:'Paragraph', value: this.state.paragraph, index: this.props.elementIndex});
            this.props.openParagraphEditor();
            
        } else if(elementType == 'BulletList') {
            this.props.editorData({type:'BulletList', value: this.state.list, index: this.props.elementIndex});
            this.props.openListEditor();

        }
    }

    renderElement = (elementType) => {
        switch(elementType) {
          case 'Headline':
            return <Headline text={this.state.headlineText}/>;
          case 'Image':
            return <Image source={this.state.image}/>;
          case 'Paragraph':
            return <Paragraph text={this.state.paragraph}/>;
          case 'BulletList':
            return <List list={this.state.list}/>;
          default:
            return null;
        }
    }

    render() {
        return (
            <div className={ classnames('hl_page-creator--element', this.state.isHovered?'active':null)} onMouseEnter={() => this.hoverIn()} onMouseLeave={()=> this.hoverOut()}>
                <div className="hl_page-creator--actions">
                    <div className="more-actions">
                        <span data-tooltip="tooltip" data-placement="left" title="Settings"><FontAwesomeIcon icon={faCog}  onClick={()=> {this.openEditor(this.props.element.type); this.props.addColumnIndex(this.props.columnIndex)}}/></span>
                        <span data-tooltip="tooltip" data-placement="left" title="Clone"><FontAwesomeIcon icon={faEye} /></span>
                        <span data-tooltip="tooltip" data-placement="left" title="Save"><FontAwesomeIcon icon={faCopy} /></span>
                        <span data-tooltip="tooltip" data-placement="left" title="Delete"><FontAwesomeIcon icon={faTrash}/></span>
                    </div>
                </div>
                <span className="add-new-element" 
                    onClick={()=>{this.props.openElementWidget(); this.props.addColumnIndex(this.props.columnIndex); this.props.enableElement()}} 
                    data-tooltip="tooltip" data-placement="bottom" title="Add New Element"><i className="icon icon-plus"></i>
                </span>

                <div className="element-container">
                    {
                        this.renderElement(this.props.element.type)
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    index: state.data.index,
    headlineText: state.editorData.headlineText,
    list: state.editorData.list,
    paragraph: state.editorData.paragraph,
    image: state.editorData.image,
    commonData: state.editorData.commonData
});

export default connect(
    mapStateToProps, 
    {openElementWidget, openImageEditor, openHeadlineEditor, openParagraphEditor, openListEditor, editorData, enableElement}
)(ElementList);