import React, { Component } from 'react'
import {connect} from 'react-redux';
import {closeElementWidget} from '../../services/widgets/actions';
import {addElement} from '../../services/content/actions';
import {addHeadline, addImage} from '../../services/elements/actions';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeading, faImage, faParagraph, faList} from '@fortawesome/free-solid-svg-icons'


class ElementOption extends Component {
    state = {
        elements: [
            {type:'Headline', icon: faHeading},
            {type: 'Image', icon: faImage},
            {type: 'Paragraph', icon: faParagraph},
            {type: 'BulletList', icon: faList}
        ]
    }


    addElement = (element) => {
        if(!this.props.elementEnabled){
            alert('Only drag and drop is allowed here');
            return;
        }
        var updatedElement = element;
        updatedElement['columnIndex'] = this.props.columnIndex;

        this.props.addElement(updatedElement);
        this.props.closeElementWidget();
    }


    dragElement = (e, element) => {
        e.dataTransfer.setData("element", JSON.stringify(element));
    }

    render() {
        return (
            <section className={classnames('hl_page-creator--element-group', this.props.elementWidgetOpen?'active':'')}>
                 <div className="close-group" id="close-element-group" onClick={()=>this.props.closeElementWidget()}><i className="icon icon-close"></i></div>
                 <div className="hl_element-group">
                 <div className="" id="add-element" role="tabpanel" aria-labelledby="add-element-tab">
              <div className="add-element">
                
                <div className="add-element-body">
                  <div className="element-group">
                    <div className="element-cards">
                    {
                         this.state.elements && this.state.elements.map((element, index)=> {
                             

                            return (
                                <div className="element-card" onClick={()=>this.addElement(element)} key={index} draggable="true" onDragStart={(e)=>this.dragElement(e, element)}>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={element.icon} />
                                    </div>
                                    <h5>{element.type}</h5>
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
    elementWidgetOpen: state.status.elementWidgetOpen,
    columnIndex: state.data.index,
    elementEnabled: state.status.elementEnabled
});
export default connect(
    mapStateToProps, 
    {closeElementWidget, addElement, addHeadline, addImage}
)(ElementOption);