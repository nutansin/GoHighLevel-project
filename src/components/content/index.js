import React, { Component } from 'react'
import {connect} from 'react-redux';
import classnames from 'classnames';
import  Section from './section.js';
import ActionsMenu from '../actionHeader/actionsMenu.js';

class Content extends Component {
    render() {
        return (
            <section className='hl_wrapper nav-shrink d-flex'>
                <section className={classnames('hl_wrapper--inner page-creator', (this.props.elementWidgetOpen || this.props.rowWidgetOpen || this.props.headlineEditorOpen || this.props.imageEditorOpen) ? '--menu-active' : null)} id="page-creator">
                    <section className="hl_page-creator--main">
                        <ActionsMenu />
                        <div className="hl_page-creator--content">
                            <Section />
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
    headlineEditorOpen: state.status.headlineEditorOpen,
    imageEditorOpen: state.status.imageEditorOpen
});
export default connect(
    mapStateToProps
)(Content);