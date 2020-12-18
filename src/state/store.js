import { createStore, combineReducers } from "redux";
import cars from "./cars";

const rootReducer = combineReducers({ cars });

const store = createStore(rootReducer);

export default store;
