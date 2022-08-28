import { combineReducers } from "redux";

import { abiReducer } from "./abiReducers";
import { errorReducer } from "./errorReducers";

export const reducers = combineReducers({
  abi: abiReducer,
  error: errorReducer,
});
