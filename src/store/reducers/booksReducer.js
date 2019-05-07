const SET_BOOKS = 'SET_BOOKS';
const ADD_SEARCH_TEXT = 'ADD_SEARCH_TEXT';
// booksLvl
const initialState = {
	books: null,
	isLoading: true,
	searchText: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_BOOKS:
			return {
				...state,
				isLoading: false,
				books: action.payload,
			};
		case ADD_SEARCH_TEXT:
			return {
				...state,
				searchText: state.searchText + action.payload,
			};
		default:
			return state;
	}};

export const setBooksAC = books => ({ type: SET_BOOKS, payload: books });
export const addSearchTextAC = text => ({ type: ADD_SEARCH_TEXT, payload: text });
