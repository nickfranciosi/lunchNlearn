import { createStore , applyMiddleware} from 'redux';
import rootReducer from './reducers';
import initialState from './initialState';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);


export default applyMiddleware(thunk)(createStore)(rootReducer,initialState);
