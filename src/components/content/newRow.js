import React, { Component } from 'react'
import classnames from 'classnames';
import NewColumn from './newColumn.js';
import {connect} from 'react-redux';
import {openRowWidget, enableRow} from '../../services/widgets/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEye, faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';

class NewRow extends Component {
    rowRef = [];

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
    moveUp = (index) => {
        var rows = document.getElementsByClassName("hl_page-creator--row");
        var updatingElementOrder = JSON.parse(rows[index].getAttribute("data-order"));


        if(updatingElementOrder == 1) {
            return;
        }
        this.setOrder(index, 'up');
    }
    
    moveDown = (index) => {
        var rows = document.getElementsByClassName("hl_page-creator--row");
        var updatingElementOrder = JSON.parse(rows[index].getAttribute("data-order"));

        if(updatingElementOrder == rows.length) {
            return;
        }
        this.setOrder(index, 'down');
    }

    setOrder = (index, moveType) => {
        var rows = document.getElementsByClassName("hl_page-creator--row");

        for(var i=0; i<rows.length; i++) {
            var currentOrder = JSON.parse(rows[i].getAttribute("data-order"));
            if(i==0) {
                var updatingElementOrder = JSON.parse(rows[index].getAttribute("data-order"));
            }
            

            if(moveType == 'up') {
                if(index == i) {
                    
                    rows[i].style.order = updatingElementOrder-1;
                    rows[i].setAttribute("data-order", updatingElementOrder-1);

                    
                } else if(currentOrder == updatingElementOrder-1) {
                    rows[i].style.order = currentOrder+1;
                    rows[i].setAttribute("data-order", currentOrder+1);
                }      
                    
            } else {
                if(index == i) {
                    
                    rows[i].style.order = updatingElementOrder+1;
                    rows[i].setAttribute("data-order", updatingElementOrder+1);

                    
                }    
                else if(currentOrder == updatingElementOrder+1) {

                    rows[i].style.order = currentOrder-1;
                    rows[i].setAttribute("data-order", currentOrder-1);

                } 
            }
        }
    }
    
    render() {
        return (
            <div className={ classnames('hl_page-creator--row', this.state.isHovered?'active':null)} data-order={this.props.rowIndex+1} style={{order:this.props.rowIndex+1}} onMouseEnter={() => this.hoverIn()} onMouseLeave={()=> this.hoverOut()}>
                <div className="hl_page-creator--actions">
                    <div className="move-actions">
                        <span data-tooltip="tooltip" data-placement="top" title="Up" onClick={()=>this.moveUp(this.props.rowIndex)}><i className="icon icon-arrow-up-2"></i></span>
                        <span data-tooltip="tooltip" data-placement="top" title="Down" onClick={()=>this.moveDown(this.props.rowIndex)}><i className="icon icon-arrow-down-2"></i></span>
                    </div>
                    <div className="more-actions">
                        <span data-tooltip="tooltip" data-placement="top" title="Settings"><FontAwesomeIcon icon={faCog} /></span>
                        <span data-tooltip="tooltip" data-placement="top" title="Clone"><FontAwesomeIcon icon={faEye} /></span>
                        <span data-tooltip="tooltip" data-placement="top" title="Save"><FontAwesomeIcon icon={faCopy} /></span>
                        <span data-tooltip="tooltip" data-placement="top" title="Delete"><FontAwesomeIcon icon={faTrash} /></span>
                    </div>
                </div>
                <span className="add-new-row" onClick={()=>{this.props.openRowWidget(); this.props.enableRow()}} data-tooltip="tooltip" data-placement="bottom" title="Add New Row"><i className="icon icon-plus"></i></span>
                {

                    this.props.rows.length>0 && this.props.rows.map((rows, index)=> {
                        return (  
                            <NewColumn 
                                column={rows.column}
                                // elements={column.elements}
                                key={index} 
                                columnIndex={index} 
                            />
                        )
                    })
                }
            </div>
       )
    }
}

export default connect(
    null,
    {openRowWidget, enableRow}
)(NewRow);