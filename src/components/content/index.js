import React, { Component } from 'react'
import  Section from './section.js';
import ActionsMenu from '../actionHeader/actionsMenu.js';

class Content extends Component {

    render() {
        return (
            <section className='hl_wrapper nav-shrink d-flex'>
                <section className='hl_wrapper--inner page-creator' id="page-creator">
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

export default Content;