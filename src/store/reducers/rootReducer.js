import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import uiReduser from './uiReduser';

export default combineReducers({
	booksLvl: booksReducer,
	ui: uiReduser,
});
