import { createStore } from 'redux';
import reducer from './reducers';


const store = createStore(reducer);
// store.getState()

export default store;