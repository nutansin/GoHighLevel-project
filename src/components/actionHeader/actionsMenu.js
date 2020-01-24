import React, { Component } from 'react'
import {connect} from 'react-redux';
import {openRowWidget, openElementWidget, disableElement, disableRow} from '../../services/widgets/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faCog, faPlug, faExternalLinkAlt, faExpand, faColumns, faCode, faRedo, faUndo, faBars, faArrowLeft, faDesktop} from '@fortawesome/free-solid-svg-icons'

class ActionsMenu extends Component {

  render() {
      return (
          <div className="hl_page-creator--menu">
          <div className="menu--left">
            <button type="button" className="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Back"><FontAwesomeIcon icon={faArrowLeft}/></button>
            <div className="btn-group">
              <button type="button" className="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Desktop" id="page-creator-desktop"><FontAwesomeIcon icon={faDesktop}/></button>
              <button type="button" className="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Mobile" id="page-creator-mobile"><FontAwesomeIcon icon={faMobileAlt}/></button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Apps"><FontAwesomeIcon icon={faPlug} />
              </button>
              <div className="dropdown" id="settings-group">
                <button type="button" className="btn btn-light btn-sm dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip" data-placement="top" title="Settings"><FontAwesomeIcon icon={faCog} /><span className="btn-text">Settings</span></button>
                <div className="dropdown-menu">
                  <div className="nav">
                    <a className="dropdown-item" data-toggle="tab" href="#integrations">Integrations</a>
                    <a className="dropdown-item" data-toggle="tab" href="#seo">SEO Meta Data</a>
                    <a className="dropdown-item" data-toggle="tab" href="#tracking">Tracking Code</a>
                    <a className="dropdown-item" data-toggle="tab" href="#css">Custom CSS</a>
                    <a className="dropdown-item" data-toggle="tab" href="#background">Background</a>
                    <a className="dropdown-item" data-toggle="tab" href="#typography">Typography</a>
                    <a className="dropdown-item" data-toggle="tab" href="#general">General</a>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <button type="button" className="btn btn-light btn-sm dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip" data-placement="top" title="Pop up"><FontAwesomeIcon icon={faExternalLinkAlt} /><span className="btn-text">Pop up</span>
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Show Popup</a>
                  <a className="dropdown-item" href="#">Edit Settings</a>
                </div>
              </div>
              <button type="button" className="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Undo"><FontAwesomeIcon icon={faUndo} /></button>
              <button type="button" className="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Redo" disabled><FontAwesomeIcon icon={faRedo} /></button>
            </div>
          </div>
          <div className="menu--right">
            <div className="btn-group">
              <div className="dropdown" id="section-group">
                <button type="button" className="btn btn-light btn-sm dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip" data-placement="top" title="Sections"><FontAwesomeIcon icon={faExpand} /><span className="btn-text">Sections</span>
                </button>
                <div className="dropdown-menu">
                  <div className="nav">
                    <a className="dropdown-item" data-toggle="tab" href="#add-section">Add Section</a>
                    <a className="dropdown-item" data-toggle="tab" href="#manage-sections">Manage</a>
                  </div>
                </div>
              </div>
              <div className="dropdown" id="row-group">
                <button type="button" className="btn btn-light btn-sm dropdown-toggle" onClick={()=>{this.props.openRowWidget(); this.props.disableRow()}} aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip" data-placement="top" title="Rows"><FontAwesomeIcon icon={faBars} /><span className="btn-text">Rows</span>
                </button>
                <div className="dropdown-menu">
                  <div className="nav">
                    <a className="dropdown-item" data-toggle="tab" href="#add-row">Add Row</a>
                    <a className="dropdown-item" data-toggle="tab" href="#manage-rows">Manage</a>
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Columns" id="column-group"><FontAwesomeIcon icon={faColumns} /><span className="btn-text">Columns</span>
              </button>
              <div className="dropdown" id="element-group">
                <button type="button" className="btn btn-light btn-sm dropdown-toggle" onClick={()=>{this.props.openElementWidget(); this.props.disableElement()}} aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" data-tooltip="tooltip" data-placement="top" title="Elements"><FontAwesomeIcon icon={faCode} /><span className="btn-text">Elements</span>
                </button>
                <div className="dropdown-menu">
                  <div className="nav">
                    <a className="dropdown-item" data-toggle="tab" href="#add-element">Add Element</a>
                    <a className="dropdown-item" data-toggle="tab" href="#manage-elements">Manage</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Preview"><i className="far fa-eye"></i><span className="btn-text">Preview</span>
              </button>
              <button type="button" className="btn btn-light btn-sm" data-tooltip="tooltip" data-placement="top" title="Save"><i className="far fa-save"></i><span className="btn-text">Save</span>
              </button>
            </div>
          </div>
        </div>
      )
  }
}

export default connect(
  null,
  {openRowWidget, openElementWidget, disableElement, disableRow}
)(ActionsMenu);