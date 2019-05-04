const SET_BOOKS = 'SET_BOOKS';
const ADD_BOOK = 'ADD_BOOK';

export default (state = {}, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const setBooksAC = books => ({ type: SET_BOOKS, payload: { books } });
export const addBookAC = book => ({ type: ADD_BOOK, payload: { book } });
