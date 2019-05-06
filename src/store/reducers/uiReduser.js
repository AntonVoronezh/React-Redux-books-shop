const CHANGE_ACTIVE_ITEM_FILTER = 'CHANGE_ACTIVE_ITEM_FILTER';
// ui
const initialState = {
	books: null,
	isLoading: true,
	aaaaa: 'что0то еще',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ACTIVE_ITEM_FILTER:
			return {
				...state,
				isLoading: false,
				books: action.payload,
			};
		default:
			return state;
	}};

export const changeActiveItemFilterAC = books => ({ type: CHANGE_ACTIVE_ITEM_FILTER, payload: books });
