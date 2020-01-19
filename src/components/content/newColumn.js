import React, { Component } from 'react';
import {connect} from 'react-redux';
import {openElementWidget} from '../../services/widgets/actions';
import {addColumnIndex} from '../../services/content/actions';
import ElementContainer from '../elements/elementContainer';

class NewColumn extends Component {

    state = {
        elementAdded: false
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.element && nextProps.element.columnIndex === this.props.columnIndex) {
            this.setState({
                elementAdded: true
            })
        }
    }


    shouldComponentUpdate(nextProps) {
        if(nextProps.element && nextProps.element.columnIndex === this.props.columnIndex) {
            return true;
        }
        return false;
    }


    render() {
        return (
            <div className="hl_page-creator--column" >   
                <ElementContainer element={this.props.element}
                    columnIndex={this.props.columnIndex}
                />
                    
                {
                    this.state.elementAdded===false?<div className="new-element-blank">
                        <span className="btn btn-light6 btn-slim" onClick={()=>{this.props.openElementWidget(); this.props.addColumnIndex(this.props.columnIndex)}}>Add New Element</span>
                    </div>:null
                }
                
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    element: state.data.element
});
export default connect(
    mapStateToProps, 
    {openElementWidget, addColumnIndex}
)(NewColumn);