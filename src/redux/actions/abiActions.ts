import { actionTypes } from "../constants/types";

export const addABI = (abi: any[], idx: number) => {
  return {
    type: actionTypes.ADD_TO_ABI,
    payload: [abi, idx],
  };
};

export const removeABI = (abi: any[], idx: number) => {
  return {
    type: actionTypes.REMOVE_FROM_ABI,
    payload: [abi, idx],
  };
};
