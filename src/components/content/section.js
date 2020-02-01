import React, { Component } from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faCopy, faCog } from '@fortawesome/free-solid-svg-icons';
import NewRow from './newRow.js';
import {openRowWidget, closeRowWidget, enableRow} from '../../services/widgets/actions';
import {addSection, addSectionIndex, addRow} from '../../services/content/actions';

class Section extends Component {
    
    state = {
        isHovered: false
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

    dropRow = (e) => {
        if(!e.dataTransfer.types.includes('row')) {
            return;
        }
        
        var rows = JSON.parse(e.dataTransfer.getData("row"));
        var data = {
            rows: {rows: rows},
            index: this.props.index
        }

        this.props.addRow(data);
        this.props.closeRowWidget();
    }
    dragOverSection = (e) => {
        e.preventDefault();
    }

    addSection = (index) => {
        var data = {
            section: {section:[]},
            index: index
        }
        this.props.addSection(data);
    }

    updateNodeIndex = (index) => {
        this.props.addSectionIndex(index);
    }

    render() {
        return (
            <section className={ classnames('hl_page-creator--section', this.state.isHovered?'active':null)}  
                    onMouseEnter={() => this.hoverIn()} 
                    onMouseLeave={()=> this.hoverOut()}
                    onDrop={(e)=>this.dropRow(e)} 
                    onDragOver={(e)=>this.dragOverSection(e)} >

                <div className="hl_page-creator--actions">
                    <div className="move-actions">
                    <span data-tooltip="tooltip" data-placement="right" title="Up"><i className="icon icon-arrow-up-2"></i></span>
                    <span data-tooltip="tooltip" data-placement="right" title="Down"><i
                        className="icon icon-arrow-down-2"></i></span>
                    </div>
                    <div className="more-actions">
                        <span data-tooltip="tooltip" data-placement="left" title="Settings"><FontAwesomeIcon icon={faCog} /></span>
                        <span data-tooltip="tooltip" data-placement="left" title="Clone"><FontAwesomeIcon icon={faEye} /></span>
                        <span data-tooltip="tooltip" data-placement="left" title="Save"><FontAwesomeIcon icon={faCopy} /></span>
                        <span data-tooltip="tooltip" data-placement="left" title="Delete"><FontAwesomeIcon icon={faTrash} /></span>
                    </div>
                </div>
                <span className="add-new-section" data-tooltip="tooltip" data-placement="bottom" title="Add New Section" onClick={()=> {this.addSection(this.props.index)}}><i className="icon icon-plus"></i></span>
                
                {
                    this.props.section && this.props.section.length==0 ? <div className="new-row-blank">
                    <span className="btn btn-light5 btn-slim" onClick={()=>{this.props.openRowWidget(); this.updateNodeIndex(this.props.index); this.props.enableRow()}}>Add New Row</span></div>:'' 
                } 
                
                {
                    
                    this.props.section && this.props.section.map((section, index)=> {
                        return (
                            <NewRow
                                rows={section.rows} key={index}
                                index={index} 
                                sectionIndex={this.props.index}
                            />
                        )
                    })
                }
                
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    editor: state.data.editor
});
export default connect(
    mapStateToProps, 
    {openRowWidget, closeRowWidget, enableRow, addSection, addSectionIndex, addRow}
)(Section);