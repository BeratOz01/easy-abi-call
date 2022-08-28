import { combineReducers } from "redux";
import { abiReducer } from "./abiReducers";

export const reducers = combineReducers({
  abi: abiReducer,
});
