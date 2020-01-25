import React, { Component } from 'react'
import classnames from 'classnames';
import {connect} from 'react-redux';
import {closeListEditor} from '../../../services/widgets/actions';
import {addList} from '../../../services/elements/actions';

class ListEditor extends Component {
    state = {
        list: [{item: ''}, {item: ''}, {item: ''}],
        inputVal: ''
    }

    componentWillReceiveProps(nextProps){
        if(!nextProps.listEditorOpen) {
            return;
        }
        if(nextProps.commonData.value) {
            this.setState(state => {
                state.list = nextProps.commonData.value;
                const list = state.list;
                return {
                  list
                }
            });
        } else {
            this.setState(state => {
                state.list = [{item: ''}, {item: ''}, {item: ''}];
                const list = state.list;
                return {
                  list
                }
            });
        }
    }

    handleInputChange = (value, index) => {
        this.setState(state => {
            state.list[index].item = value;
            const list = state.list;
            return {
              list
            }
        });
    }
    
    addItem = () => {
        this.setState(state => {
            const list = state.list.concat({item:''});
            return {
              list
            }
        });
    }
    deleteItem = (index) => {
        this.setState(state => {
            state.list.splice(index, 1);
            const list = state.list;
            return {
              list
            }
        });
    }

    submitInput = () => {
        this.props.addList(this.state.list);
    }
    render() {
        return (
            <section className={classnames('hl_page-creator--rows-group editor list-editor', this.props.listEditorOpen?'active':'')}>
                <div className="close-group" id="close-row-group" onClick={()=>this.props.closeListEditor()}><i className="icon icon-close"></i></div>
                <div className="hl_row-group">
                <div className="tab-content" id="hl_row-group-tab">
                    <div className="" id="add-row" role="tabpanel" aria-labelledby="add-row-tab">
                    <div className="add-row">
                        <h2>List Editor</h2>
                        <div className="add-row-body">
                            {
                                 this.state.list.length>0 && this.state.list.map((val, index)=> {
                                    return (
                                        <List key={index} 
                                            value={val.item} 
                                            index={index} 
                                            handleInputChange={(value, index)=>this.handleInputChange(value, index)}
                                            deleteItem={(index)=>this.deleteItem(index)}
                                        />
                                    )
                                })
                            }
                            <div><button className="btn btn-primary" onClick={()=> this.addItem()} style={{marginBottom: '20px'}}>Add Item</button></div>
                            <button className="btn btn-success" onClick={()=> {this.submitInput(); this.props.closeListEditor()}}>Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

class List extends Component {
    state = {
        input: ''
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.value != this.props.value) {
            this.setState({
                input: nextProps.value
            });
        }
    }
   
    handleInputChange = (value) => {
        this.setState({
            input: value
        });
    }

    render () {
        return (
            <div>
                <span>Item</span>
                <span><input type="text" value={this.state.input} onChange={e => this.handleInputChange(e.target.value)} onKeyUp={e=> this.props.handleInputChange(e.target.value, this.props.index)}/></span>
                <span className="close-wrapper" onClick={()=> this.props.deleteItem(this.props.index)}><i className="icon icon-close"></i></span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    listEditorOpen: state.status.listEditorOpen,
    commonData: state.editorData.commonData
});
export default connect(
    mapStateToProps, 
    {closeListEditor, addList}
)(ListEditor);