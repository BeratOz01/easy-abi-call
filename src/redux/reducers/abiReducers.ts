import { actionTypes } from "../constants/types";

const INITIAL_STATE = {
  abi: [],
  address: "",
};

export const abiReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_TO_ABI:
      return {
        ...state,
        abi: [...state.abi, action.payload],
      };
    case actionTypes.REMOVE_FROM_ABI:
      return {
        ...state,
        abi: state.abi.filter((abi: any) => abi !== action.payload),
      };
    default:
      return state;
  }
};
