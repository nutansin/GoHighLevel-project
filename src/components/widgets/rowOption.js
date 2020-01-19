import React, { Component } from 'react'
import {connect} from 'react-redux';
import {openRowWidget, closeRowWidget} from '../../services/widgets/actions';
import {addRow} from '../../services/content/actions';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns } from '@fortawesome/free-solid-svg-icons';

class RowOption extends Component {
    state = {
        columns:[1,2,3,4]
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
                                        <div className="row-card" onClick={()=>{this.props.addRow(n); this.props.closeRowWidget();}} key={n}>
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
    rowWidgetOpen: state.status.rowWidgetOpen
});
export default connect(
    mapStateToProps, 
    {openRowWidget, closeRowWidget, addRow}
)(RowOption);