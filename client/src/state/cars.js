const LOAD = "LOAD";
// const CREATE = 'CREATE';
// const UPDATE = 'UPDATE';
// const DELETE = 'DELETE';

const initialState = {
	cars: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export function loadCars() {
	return (dispatch) => {
		dispatch({
			type: LOAD,
		});
	};
}
