import React, { Component } from 'react'
import {connect} from 'react-redux';
import {openHeadlineEditor, openImageEditor, openParagraphEditor, openListEditor} from '../../services/widgets/actions';
import {addColumnIndex} from '../../services/content/actions';
import {editorData} from '../../services/elements/actions';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faCopy, faCog } from '@fortawesome/free-solid-svg-icons';
import Headline from './headline.js';
import Image from './image.js';
import Paragraph from './paragraph';
import List from './list.js';


class ElementContainer extends Component {

    state = {
        isHovered: false,
        image: null,
        headlineText: '',
        paragraph: '',
        list: [{item: ''}, {item: ''}, {item: ''}]
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.index === this.props.columnIndex) {
            if(nextProps.element.type == 'Headline' && nextProps.headlineText != this.props.headlineText) {
                this.setState({
                    headlineText: nextProps.headlineText
                })
            } else if (nextProps.element.type == 'Image' && nextProps.image != this.props.image) {
                this.setState({
                    image: nextProps.image
                })
            } else if (nextProps.element.type == 'Paragraph' && nextProps.paragraph != this.props.paragraph) {
                this.setState({
                    paragraph: nextProps.paragraph
                })
            } else if (nextProps.element.type == 'BulletList' && nextProps.list != this.props.list) {
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

    openEditor = (elementType) => {
        
        if(elementType == 'Headline') {
            this.props.editorData(this.state.headlineText);
            this.props.openHeadlineEditor();
            
        } else if(elementType == 'Image') {
            this.props.openImageEditor();

        } else if(elementType == 'Paragraph') {
            this.props.editorData(this.state.paragraph);
            this.props.openParagraphEditor();
            
        } else if(elementType == 'BulletList') {
            this.props.editorData(this.state.list);
            this.props.openListEditor();

        }
        this.props.addColumnIndex(this.props.columnIndex);
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
   

    render() {
        return (
            <div>
                {
                    Object.keys(this.props.element).length>0 ? 
                        <div className={ classnames('hl_page-creator--element', this.state.isHovered?'active':null)} onMouseEnter={() => this.hoverIn()} onMouseLeave={()=> this.hoverOut()}>
                            <div className="hl_page-creator--actions">
                                <div className="more-actions">
                                    <span data-tooltip="tooltip" data-placement="left" title="Settings"><FontAwesomeIcon icon={faCog}  onClick={()=> this.openEditor(this.props.element.type)}/></span>
                                    <span data-tooltip="tooltip" data-placement="left" title="Clone"><FontAwesomeIcon icon={faEye} /></span>
                                    <span data-tooltip="tooltip" data-placement="left" title="Save"><FontAwesomeIcon icon={faCopy} /></span>
                                    <span data-tooltip="tooltip" data-placement="left" title="Delete"><FontAwesomeIcon icon={faTrash}/></span>
                                </div>
                            </div>
                            <span className="add-new-element" data-tooltip="tooltip" data-placement="bottom" title="Add New Element"><i className="icon icon-plus"></i></span>

                            <div className="element-container">
                                {
                                    this.renderElement(this.props.element.type)
                                }
                            </div>
                        </div>:null
                }
            </div>
            
            
        )
    }
}

const mapStateToProps = (state) => ({
    index: state.data.index,
    headlineText: state.editorData.headlineText,
    list: state.editorData.list,
    paragraph: state.editorData.paragraph,
    image: state.editorData.image
});
export default connect(
    mapStateToProps, 
    {openImageEditor, openHeadlineEditor, openParagraphEditor, openListEditor, addColumnIndex, editorData}
)(ElementContainer);