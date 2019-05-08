const CHANGE_ACTIVE_ITEM_FILTER = 'CHANGE_ACTIVE_ITEM_FILTER';
// card
const initialState = {
	activeItem: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ACTIVE_ITEM_FILTER:
			return {
				...state,
				activeItem: action.payload,
			};
		default:
			return state;
	}};

export const changeActiveItemFilterAC = item => ({ type: CHANGE_ACTIVE_ITEM_FILTER, payload: item });
