import React, { Component } from 'react'
import classnames from 'classnames';
import {connect} from 'react-redux';
import {closeImageEditor} from '../../../services/widgets/actions';
import {addImage} from '../../../services/elements/actions';

class ImageEditor extends Component {
    fileInput = React.createRef();
    state = {
        file: null,
        url: ''
    }

    handleInputChange = (event) => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }
    handleInputUrl = (url) => {
        this.setState({
            url: url
        })
    }
    submitInput = () => {
        if(this.state.url) {
            this.props.addImage(this.state.url);
        } else {
            this.props.addImage(this.state.file);
        }
        
        this.fileInput.value = '';
        if(this.state.url) {
            this.setState({
                url: ''
            });
        }
        
    }

    render() {
        return (
            <section className={classnames('hl_page-creator--rows-group editor', this.props.imageEditorOpen?'active':'')}>
                <div className="close-group" id="close-row-group" onClick={()=>this.props.closeImageEditor()}><i className="icon icon-close"></i></div>
                <div className="hl_row-group">
                <div className="tab-content" id="hl_row-group-tab">
                    <div className="" id="add-row" role="tabpanel" aria-labelledby="add-row-tab">
                    <div className="add-row">
                        <h2>Editor</h2>
                        <div className="add-row-body">
                            <div>Choose Image</div>
                            <div>
                                <input type="file" onChange={e => this.handleInputChange(e)} ref={(ref)=> this.fileInput = ref}/>
                                
                            </div>
                            <hr/>
                            <h3 style={{textAlign:'center'}}>OR</h3>
                            <hr/>
                            <div><input type="text" placeholder="Enter Url" value={this.state.url} onChange={e => this.handleInputUrl(e.target.value)} /></div>
                            <button className="btn btn-success" onClick={()=> {this.submitInput(); this.props.closeImageEditor()}}>Submit</button>
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
    imageEditorOpen: state.status.imageEditorOpen
});
export default connect(
    mapStateToProps, 
    {closeImageEditor, addImage}
)(ImageEditor);