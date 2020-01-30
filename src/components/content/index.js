import React, { Component } from 'react'
import {connect} from 'react-redux';
import  Section from './section.js';
import classnames from 'classnames';
import ActionsMenu from '../actionHeader/actionsMenu.js';

class Content extends Component {
    // state = {
    //     section: []
    // }
    // componentWillReceiveProps (nextProps)  {
    //     if(nextProps.section.length>0 && nextProps.section.length !== this.props.section.length) {
    //         this.setState(()=>{
    //            return {
    //             section: nextProps.section
    //            }
    //         })
    //     }
    // }
    render() {
        return (
            <section className='hl_wrapper nav-shrink d-flex'>
                <section className={classnames('hl_wrapper--inner page-creator', ((this.props.elementEnabled && this.props.elementWidgetOpen) || (this.props.rowEnabled && this.props.rowWidgetOpen))?'--menu-active':null)} id="page-creator">
                    <section className="hl_page-creator--main">
                        <ActionsMenu />
                        <div className="hl_page-creator--content">
                        {
                            this.props.section && this.props.section.map((section, index)=> {
                                return (
                                    <Section index={index} key={index} rows={section.rows}/>
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
    section: state.data.section
});
export default connect(
    mapStateToProps
)(Content);