import React, { Component } from 'react'
import NewRow from './newRow.js';
import {connect} from 'react-redux';
import {openRowWidget} from '../../services/widgets/actions';

export class RowWrapper extends Component {

    shouldComponentUpdate(nextProps) {
        if(nextProps.sectionIndex === this.props.sectionIndex) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div>
                {
                    this.props.addedRow.length==0 ? <div className="new-row-blank">
                    <span className="btn btn-light5 btn-slim" onClick={()=>this.props.openRowWidget()}>Add New Row</span></div>:'' 
                } 
                
                {
                    
                    this.props.addedRow.length>0 && this.props.addedRow.map((row, index)=> {
                        return (
                            <NewRow
                                columnType={row} key={index}
                                rowIndex={index} 
                                totalRows={this.props.addedRow.length}
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
    {openRowWidget}
)(RowWrapper);
