import axios from "axios";
import cars from "../pages/administration/cars";

const LOAD = "LOAD";
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";

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
		case UPDATE:
			let newState = state.cars.filter((car) => {
				return car._id !== action.payload._id;
			});

			return {
				...state,
				cars: newState.concat(action.payload),
			};
		case DELETE:
			let filteredData = state.cars.filter((car) => {
				return car._id !== action.payload._id;
			});

			return {
				...state,
				cars: filteredData,
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

export function updateCar(car) {
	return (dispatch) => {
		dispatch({
			type: UPDATE,
			payload: car,
		});
	};
}

export function deleteCar(carId) {
	return (dispatch) => {
		const obj = {
			_id: carId,
		};
		axios
			.delete("/api/cars", { data: obj })
			.then(function (res) {
				console.log(res.data);
				dispatch({
					type: DELETE,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
