const SET_BOOKS = 'SET_BOOKS';
// booksLvl
const initialState = {
	books: null,
	isLoading: true,
	aaaaa: 'что0то еще',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_BOOKS:
			return {
				...state,
				isLoading: false,
				books: action.payload,
			};
		default:
			return state;
	}};

export const setBooksAC = books => ({ type: SET_BOOKS, payload: books });
