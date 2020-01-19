import React, { Component } from 'react'
import {connect} from 'react-redux';
import Headline from './headline.js';
import Image from './image.js';

class ElementComponent extends Component {

    shouldComponentUpdate(nextProps) {
        if(nextProps.columnIndex === this.props.elementIndex) {
            return true;
        }
        return false;
    }

    renderElement = (elementType) => {
        switch(elementType) {
          case 'Headline':
            return <Headline text={this.props.headlineText}/>;
          case 'Image':
            return <Image source={this.props.image}/>;
          default:
            return null;
        }
    }

    render() {
        return (
            <div className="element-container">
                {
                    this.renderElement(this.props.elementType)
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    headlineText: state.editorData.headlineText,
    image: state.editorData.image
});
export default connect(
    mapStateToProps
)(ElementComponent);