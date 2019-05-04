import { createStore, applyMiddleware } from 'redux';


export default () => createStore(rootReducer, applyMiddleware);
