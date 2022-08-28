import { actionTypes } from "../constants/types";

const INITIAL_STATE: {
  abi: any[];
  address: string;
  indexes: number[];
} = {
  abi: [],
  address: "",
  indexes: [],
};

export const abiReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_TO_ABI:
      const isExist = state.indexes.includes(action.payload.idx as number);
      if (isExist) return state;
      return {
        ...state,
        indexes: [...state.indexes, action.payload.idx],
        abi: [...state.abi, action.payload.abi],
      };
    case actionTypes.REMOVE_FROM_ABI:
      return {
        ...state,
        abi: state.abi.filter((abi: any) => abi !== action.payload.abi),
        indexes: state.indexes.filter(
          (idx: number) => idx !== action.payload.idx
        ),
      };
    default:
      return state;
  }
};
