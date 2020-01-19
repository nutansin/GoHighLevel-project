import React, { Component } from 'react'
import classnames from 'classnames';
import {connect} from 'react-redux';
import {closeHeadlineEditor} from '../../../services/widgets/actions';
import {addHeadline} from '../../../services/elements/actions';

class HeadlineEditor extends Component {
    state = {
        inputVal: ''
    }
    
    handleInputChange = (value) => {
        this.setState({
            inputVal: value
        })
    }
    submitInput = (input) => {
        this.props.addHeadline(input);
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
    headlineEditorOpen: state.status.headlineEditorOpen
});
export default connect(
    mapStateToProps, 
    {closeHeadlineEditor, addHeadline}
)(HeadlineEditor);