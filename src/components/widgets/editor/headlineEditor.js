import React, { Component } from 'react'
import classnames from 'classnames';
import {connect} from 'react-redux';
import {closeHeadlineEditor} from '../../../services/widgets/actions';
import {updateElementValue} from '../../../services/content/actions';

class HeadlineEditor extends Component {
    state = {
        inputVal: ''
    }

    componentWillReceiveProps(nextProps){
        if(!nextProps.headlineEditorOpen) {
            return;
        }
        if(nextProps.commonData.value) {
            this.setState({
                inputVal: nextProps.commonData.value
            })
        } else {
            this.setState({
                inputVal: ''
            })
        }
    }
    
    handleInputChange = (value) => {
        this.setState({
            inputVal: value
        })
    }
    submitInput = (input) => {
        var data = {
            value: input,
            elementIndex: this.props.elementIndex,
            sectionIndex: this.props.sectionIndex,
            columnIndex: this.props.columnIndex,
            rowIndex: this.props.rowIndex
        }
        this.props.updateElementValue(data);
        this.setState({
            inputVal: ''
        });
    }
    render() {
        return (
            <section className={classnames('hl_page-creator--rows-group editor', this.props.headlineEditorOpen?'active':'')}>
                <div className="close-group" id="close-row-group" onClick={()=>this.props.closeHeadlineEditor()}><i className="icon icon-close"></i></div>
                <div className="hl_row-group">
                <div className="tab-content" id="hl_row-group-tab">
                    <div className="" id="add-row" role="tabpanel" aria-labelledby="add-row-tab">
                    <div className="add-row">
                        <h2>Editor</h2>
                        <div className="add-row-body">
                            <div>Enter Content</div>
                            <div><input type="text" value={this.state.inputVal} onChange={e => this.handleInputChange(e.target.value)}/></div>
                            <button className="btn btn-success" onClick={()=> {this.submitInput(this.state.inputVal); this.props.closeHeadlineEditor()}}>Submit</button>
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
    headlineEditorOpen: state.status.headlineEditorOpen,
    commonData: state.editorData.commonData,
    elementIndex: state.data.elementIndex,
    sectionIndex: state.data.sectionIndex,
    columnIndex: state.data.columnIndex,
    rowIndex: state.data.rowIndex
});
export default connect(
    mapStateToProps, 
    {closeHeadlineEditor, updateElementValue}
)(HeadlineEditor);