import { actionTypes } from "../constants/types";

// react-toastify
import { toast } from "react-toastify";

export const errorReducer = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      toast(action.payload, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        type: "default",
        bodyClassName: "text-red-500 mono-regular rounded-none bg-dark",
        className: "border-2 border-red-500",
      });
      return {
        ...state,
      };
    default:
      return state;
  }
};
