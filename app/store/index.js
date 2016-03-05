import { createStore } from 'redux';
import rootReducer from './reducers';
import initialState from './initialState';


const store = createStore(rootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);


export default store;
