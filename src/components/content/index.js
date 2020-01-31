import React, { Component } from 'react'
import {connect} from 'react-redux';
import  Section from './section.js';
import classnames from 'classnames';
import ActionsMenu from '../actionHeader/actionsMenu.js';

class Content extends Component {
    // state = {
    //     section: []
    // }
    componentWillReceiveProps (nextProps)  {
        console.log(nextProps);
        // if(nextProps.section.length>0 && nextProps.section.length !== this.props.section.length) {
        //     this.setState(()=>{
        //        return {
        //         section: nextProps.section
        //        }
        //     })
        // }
    }
    render() {
        return (
            <section className='hl_wrapper nav-shrink d-flex'>
                <section className={classnames('hl_wrapper--inner page-creator', ((this.props.elementEnabled && this.props.elementWidgetOpen) || (this.props.rowEnabled && this.props.rowWidgetOpen))?'--menu-active':null)} id="page-creator">
                    <section className="hl_page-creator--main">
                        <ActionsMenu />
                        <div className="hl_page-creator--content">
                        {
                            this.props.editor && this.props.editor.map((editor, index)=> {
                                return (
                                    <Section index={index} key={index} section={editor.section} />
                                )
                            })
                        }
                        
                            
                        </div>
                    </section>
                </section>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    elementWidgetOpen: state.status.elementWidgetOpen,
    rowWidgetOpen: state.status.rowWidgetOpen,
    elementEnabled: state.status.elementEnabled,
    rowEnabled: state.status.rowEnabled,
    editor: state.data.editor
});
export default connect(
    mapStateToProps
)(Content);