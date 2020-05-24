import React, { Component } from 'react'
import {connect} from 'react-redux';
import {closeRowWidget} from '../../services/widgets/actions';
import {addRow} from '../../services/content/actions';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns } from '@fortawesome/free-solid-svg-icons';

export class RowOption extends Component {
    state = {
        columns:[1,2,3,4]
    }

    dragColumn = (e, n) => {
        var rows = this.getRow(n);
        e.dataTransfer.setData("row",JSON.stringify(rows));
    }

    addRow = (n) => {
        var rows = this.getRow(n);
        var data = {
            rows: {rows: rows},
            index: this.props.sectionIndex
        }
        this.props.addRow(data);
    }
    getRow = (n) => {
        var rows = [];
        for(var i=0; i<n; i++) {
            rows.push({column: []});
        }
        return rows;
    }

    render() {
        return (
            <section className={classnames('hl_page-creator--rows-group', this.props.rowWidgetOpen?'active':'')}>
                <div className="close-group" id="close-row-group" onClick={()=>this.props.closeRowWidget()}><i className="icon icon-close"></i></div>
                <div className="hl_row-group">
                <div className="tab-content" id="hl_row-group-tab">
                    <div className="" id="add-row" role="tabpanel" aria-labelledby="add-row-tab">
                    <div className="add-row">
                        <h2>Add Row</h2>
                        <div className="add-row-body">
                        <div className="row-cards">
                            {
                                this.state.columns && this.state.columns.map((n)=> {
                                    return (
                                        <div className="row-card" draggable="true" onDragStart={(e)=>this.dragColumn(e, n)} onClick={()=>{this.addRow(n); this.props.closeRowWidget();}} key={n}>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faColumns} />
                                            </div>
                                            <h5>{n}{n==1?' Column':' Columns'}</h5>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </section>
     

        )
    }
}
const mapStateToProps = (state) => ({
    rowWidgetOpen: state.status.rowWidgetOpen,
    rowEnabled: state.status.rowEnabled,
    sectionIndex: state.data.sectionIndex
});
export default connect(
    mapStateToProps, 
    {closeRowWidget, addRow}
)(RowOption);