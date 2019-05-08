const ADD_TO_CARD = 'ADD_TO_CARD';
const DELETE_FROM_CARD = 'DELETE_FROM_CARD';
// card
const initialState = {
	activeItem: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CARD:
			return {
				...state,
				activeItem: action.payload,
			};
		default:
			return state;
	}};

export const addToCardAC = book => ({ type: ADD_TO_CARD, payload: book });
export const deleteFromCardAC = id => ({ type: DELETE_FROM_CARD, payload: id });
