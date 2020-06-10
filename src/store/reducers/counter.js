import * as actionTypes from "../actions/actionTypes";

const initialState = {
	counter: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INC_COUNTER:
			return {
				...state,
				counter: state.counter + 1
			};
		case actionTypes.ADD_COUNTER:
			return {
				...state,
				counter: state.counter + action.payload.value
			};
		case actionTypes.DEC_COUNTER:
			return {
				...state,
				counter: state.counter - 1
			};
		case actionTypes.SUB_COUNTER:
			return {
				...state,
				counter: state.counter - action.payload.value
			};
		default:
			return state;
	}
};

export default reducer;
