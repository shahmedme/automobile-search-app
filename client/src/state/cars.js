import axios from "axios";
import cars from "../pages/administration/cars";

const LOAD = "LOAD";
const CREATE = "CREATE";
// const UPDATE = 'UPDATE';
// const DELETE = 'DELETE';

const initialState = {
	cars: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case LOAD:
			return {
				cars: action.payload,
			};
		case CREATE:
			return {
				...state,
				cars: state.cars.concat(action.payload),
			};
		default:
			return state;
	}
}

export function loadCars() {
	return (dispatch) => {
		axios
			.get("/api/cars")
			.then(function (res) {
				dispatch({
					type: LOAD,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function addCar(car) {
	return (dispatch) => {
		dispatch({
			type: CREATE,
			payload: car,
		});
	};
}
