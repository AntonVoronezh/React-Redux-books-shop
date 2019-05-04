import { combineReducers } from 'redux';
import booksReducer from './booksReducer';

export default combineReducers({
	booksLvl: booksReducer,
});
