import {combineReducers} from 'redux';
import widgetManager from './widgets/reducer.js';
import addRowAndElementReducer from './content/reducer.js';
import addElementsData from './elements/reducer.js';


export default combineReducers({
    status: widgetManager,
    data: addRowAndElementReducer,
    editorData: addElementsData
});