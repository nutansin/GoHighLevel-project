import React, { Component } from 'react'
import {Provider} from 'react-redux';
import store from './services/store';
import RowOption from './components/widgets/rowOption.js';
import ElementOption from './components/widgets/elementOption.js';
import Content from './components/content/index.js';
import HeadlineEditor from './components/widgets/editor/headlineEditor';
import ImageEditor from './components/widgets/editor/imageEditor';
import ParagraphEditor from './components/widgets/editor/paragraph';
import ListEditor from './components/widgets/editor/bulletList';
import LeftNavbar from './components/navHeader/leftNavbar.js';
import TopHeader from './components/navHeader/topHeader.js';
import './styles/style.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <LeftNavbar />
        <TopHeader />
        <Content />
        <RowOption />
        <ElementOption />
        <HeadlineEditor />
        <ImageEditor />
        <ParagraphEditor />
        <ListEditor />
      </Provider>
    )
  }
}
export default App;