import React, { Component } from 'react'
import {connect} from 'react-redux';
import {openHeadlineEditor, openImageEditor} from '../../services/widgets/actions';
import {addColumnIndex} from '../../services/content/actions';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faCopy, faCog } from '@fortawesome/free-solid-svg-icons';
import ElementComponent from './elementComponent.js';

class ElementContainer extends Component {

    state = {
        isHovered: false,
        image: null
    };
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
            this.props.openHeadlineEditor();
        } else if(elementType == 'Image') {
            this.props.openImageEditor();
        }
        this.props.addColumnIndex(this.props.columnIndex);
    }

    render() {
        return (
            <div>
                {
                    Object.keys(this.props.element).length>0 && (this.props.element.columnIndex===this.props.columnIndex) ? 
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

                            <ElementComponent elementType={this.props.element.type} elementIndex={this.props.elementIndex} columnIndex={this.props.columnIndex}/>
                        
                        </div>:null
                }
            </div>
            
            
        )
    }
}
const mapStateToProps = (state) => ({
    elementIndex: state.data.index

});
export default connect(
    mapStateToProps, 
    {openImageEditor, openHeadlineEditor, addColumnIndex}
)(ElementContainer);