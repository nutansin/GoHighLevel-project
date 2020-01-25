import React, { Component } from 'react'
import classnames from 'classnames';
import {connect} from 'react-redux';
import {closeParagraphEditor} from '../../../services/widgets/actions';
import {addParagraph} from '../../../services/elements/actions';

class ParagraphEditor extends Component {
    state = {
        inputVal: ''
    }

    componentWillReceiveProps(nextProps){
        if(!nextProps.paragraphEditorOpen) {
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
        this.props.addParagraph(input);
        this.setState({
            inputVal: ''
        });
    }
    render() {
        return (
            <section className={classnames('hl_page-creator--rows-group editor', this.props.paragraphEditorOpen?'active':'')}>
                <div className="close-group" id="close-row-group" onClick={()=>this.props.closeParagraphEditor()}><i className="icon icon-close"></i></div>
                <div className="hl_row-group">
                <div className="tab-content" id="hl_row-group-tab">
                    <div className="" id="add-row" role="tabpanel" aria-labelledby="add-row-tab">
                    <div className="add-row">
                        <h2>Editor</h2>
                        <div className="add-row-body">
                            <div>Enter Content</div>
                            <div><textarea cols="7" placeholder="Enter Text" value={this.state.inputVal} onChange={e => this.handleInputChange(e.target.value)} style={{width:'100%'}}></textarea></div>
                            <button className="btn btn-success" onClick={()=> {this.submitInput(this.state.inputVal); this.props.closeParagraphEditor()}}>Submit</button>
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
    paragraphEditorOpen: state.status.paragraphEditorOpen,
    commonData: state.editorData.commonData
});
export default connect(
    mapStateToProps, 
    {closeParagraphEditor, addParagraph}
)(ParagraphEditor);