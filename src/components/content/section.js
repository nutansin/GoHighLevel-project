import React, { Component } from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faCopy, faCog } from '@fortawesome/free-solid-svg-icons';
import NewRow from './newRow.js';
import {openRowWidget, closeRowWidget, enableRow} from '../../services/widgets/actions';

class Section extends Component {
    
    state = {
        isHovered: false,
        addedRow: []
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.addedRow.length !== this.props.addedRow.length) {
            this.setState(state => {
                const list = state.addedRow.push(nextProps.addedRow[nextProps.addedRow.length-1]);
                return {
                  list
                };
            });
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

    dropRow = (e) => {
        if(!e.dataTransfer.types.includes('row')) {
            return;
        }
        
        var column = JSON.parse(e.dataTransfer.getData("row"));

        this.setState(state => {
            const list = state.addedRow.push(column);
            return {
              list
            };
        });

        this.props.closeRowWidget();
    }
    dragOverSection = (e) => {
        e.preventDefault();
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
                <span className="add-new-section" data-tooltip="tooltip" data-placement="bottom" title="Add New Section"><i className="icon icon-plus"></i></span>
                
                {
                    this.state.addedRow.length==0 ? <div className="new-row-blank">
                    <span className="btn btn-light5 btn-slim" onClick={()=>{this.props.openRowWidget(); this.props.enableRow()}}>Add New Row</span></div>:'' 
                } 
                
                {
                    
                    this.state.addedRow.length>0 && this.state.addedRow.map((row, index)=> {
                        return (
                            <NewRow
                                columnType={row} key={index}
                                rowIndex={index} 
                                totalRows={this.state.addedRow.length}
                            />
                        )
                    })
                }
                
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    addedRow: state.data.rows
});
export default connect(
    mapStateToProps, 
    {openRowWidget, closeRowWidget, enableRow}
)(Section);