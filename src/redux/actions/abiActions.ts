import { actionTypes } from "../constants/types";

export const addABI = (abi: any[]) => {
  return {
    type: actionTypes.ADD_TO_ABI,
    payload: abi,
  };
};

export const removeABI = (abi: any[]) => {
  return {
    type: actionTypes.REMOVE_FROM_ABI,
    payload: abi,
  };
};
