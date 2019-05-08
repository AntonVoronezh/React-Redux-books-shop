import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import uiReduser from './uiReduser';
import cardReducer from './cardReducer';

export default combineReducers({
	booksLvl: booksReducer,
	ui: uiReduser,
	card: cardReducer,
});
