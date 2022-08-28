import { actionTypes } from "../constants/types";

export const addABI = (abi: any[], idx: number) => {
  return {
    type: actionTypes.ADD_TO_ABI,
    payload: [abi, idx],
  };
};

export const setABI = (abi: any[]) => {
  return {
    type: actionTypes.ADD_TO_ABI,
    payload: [abi],
  };
};

export const removeABI = (abi: any[], idx: number) => {
  return {
    type: actionTypes.REMOVE_FROM_ABI,
    payload: [abi, idx],
  };
};

export const removeAll = (abi: any[], idx: number) => {
  return {
    type: actionTypes.REMOVE_FROM_ABI,
  };
};

export const setAddress = (addr: string) => {
  return {
    type: actionTypes.SET_ADDRESS,
    payload: addr,
  };
};

export const setError = (error: string) => {
  return {
    type: actionTypes.SET_ERROR,
    payload: error,
  };
};
