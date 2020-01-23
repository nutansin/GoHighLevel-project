import React, { Component } from 'react'
import {connect} from 'react-redux';
import {openHeadlineEditor, openImageEditor} from '../../services/widgets/actions';
import {addColumnIndex} from '../../services/content/actions';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faCopy, faCog } from '@fortawesome/free-solid-svg-icons';
import Headline from './headline.js';
import Image from './image.js';


class ElementContainer extends Component {

    state = {
        isHovered: false,
        image: null,
        headlineText: ''
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
            }
            
        }
    }

    openEditor = (elementType) => {
        if(elementType == 'Headline') {
            this.props.openHeadlineEditor();
        } else if(elementType == 'Image') {
            this.props.openImageEditor();
        }
        this.props.addColumnIndex(this.props.columnIndex);
    }

    renderElement = (elementType) => {
        switch(elementType) {
          case 'Headline':
            return <Headline text={this.state.headlineText}/>;
          case 'Image':
            return <Image source={this.state.image}/>;
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
    image: state.editorData.image
});
export default connect(
    mapStateToProps, 
    {openImageEditor, openHeadlineEditor, addColumnIndex}
)(ElementContainer);